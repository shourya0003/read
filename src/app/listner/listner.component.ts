import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-listner',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule],
  templateUrl: './listner.component.html',
  styleUrl: './listner.component.scss'
})
export class ListnerComponent {
  listening = false;
  private recognition: any;
  transcription = '';
  listnerSubject = new BehaviorSubject<any>(null);
  @Output()
  recognizedText:EventEmitter<any> = new EventEmitter();


  ngOnInit() {
   this.load();
    this.recognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

    if (!this.recognition) {
      console.error('SpeechRecognition API not supported in this browser');
      return;
    }

    this.recognition = new this.recognition();

    this.recognition.continuous = true;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;

    this.recognition.onstart = () => {
      console.log('Speech recognition started');
    };

    this.recognition.onresult = (event:any) => {
      console.log("result here",event)
      const transcript = event.results[event.results.length - 1][0].transcript;
      this.transcription = transcript;
      console.log(this.transcription);
      this.recognizedText.emit(this.transcription);
      // this.listnerSubject.next(this.transcription);
    };

    this.recognition.onend = () => {
      console.log('Speech recognition ended');
    };
    this.recognition.onspeechend = () => {
      this.recognition.stop();
    };
  }

  async load(){
    // const model = await tf.loadGraphModel('../../assets/model.json');
    // let recognizer = speechCommands.create('BROWSER_FFT');

  }



  toggleListening() {
    if (this.listening) {
      this.recognition.stop();
      this.listening = false;
    } else {
      this.recognition.start();
      this.listening = true;
    }
  }


}
