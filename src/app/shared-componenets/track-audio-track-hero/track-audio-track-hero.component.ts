import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  Renderer2,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-audio-track-hero',
  templateUrl: './track-audio-track-hero.component.html',
  styleUrls: ['./track-audio-track-hero.component.scss'],
})
export class TrackAudioTrackHeroComponent implements AfterViewInit, OnDestroy {
  @Input() previewLink!: string | null;
  @Input() spotLink!: string;

  @ViewChild('audioItem', { static: false }) audioItemRef:
    | ElementRef
    | undefined;
  @ViewChild('timeline', { static: false }) timelineRef: ElementRef | undefined;
  conrolPlayState = 'P';

  private timeUpdateListener!: () => void | undefined;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.changeTimelinePosition();

    if (this.audioItemRef) {
      const audioElement: HTMLAudioElement = this.audioItemRef.nativeElement;
      this.timeUpdateListener = () => {
        this.changeTimelinePosition();
      };
      audioElement.addEventListener('timeupdate', this.timeUpdateListener);
    }
  }

  // Example function to play the audio
  playAudio() {
    this.conrolPlayState = 'S';
    if (this.audioItemRef) {
      const audioElement: HTMLAudioElement = this.audioItemRef.nativeElement;
      audioElement.play();
    }
  }
  pauseAudio() {
    this.conrolPlayState = 'P';
    if (this.audioItemRef) {
      const audioElement: HTMLAudioElement = this.audioItemRef.nativeElement;
      audioElement.pause();
    }
  }

  changeTimelinePosition() {
    if (this.timelineRef && this.audioItemRef) {
      const audioElement: HTMLAudioElement = this.audioItemRef.nativeElement;
      const timelineElement: HTMLInputElement = this.timelineRef.nativeElement;

      const percentagePosition =
        (100 * audioElement.currentTime) / audioElement.duration;

      this.renderer.setStyle(
        timelineElement,
        'backgroundSize',
        `${percentagePosition}% 100%`
      );
      this.renderer.setProperty(
        timelineElement,
        'value',
        percentagePosition.toString()
      );
    }
  }

  ngOnDestroy() {
    if (this.audioItemRef && this.timeUpdateListener) {
      const audioElement: HTMLAudioElement = this.audioItemRef.nativeElement;
      audioElement.removeEventListener('timeupdate', this.timeUpdateListener);
    }
  }
}
