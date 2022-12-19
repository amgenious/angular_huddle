import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {

  fileupload = this.formBuilder.group({
    file: '',
  })

 
  public file : any = {}
  constructor (
    public storage: Storage, public formBuilder: FormBuilder,
  ){}
  chooseFile(event: any){
    this.file = event.target.files[0];
  }

     onUpload():void{
      const storageRef = ref(this.storage, `folder_name/${this.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, this.file );

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) ^ 100;
        alert('Upload is'+ progress + '% done');
      },
      (error) => {
        console.log(error.message)
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }    
      )
    }

}
