import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  onShowSelected(s: Show) {
    if (s.id !== 16) {
      this.selectedShow = s;
    }
  }

  showsFromAppComponents1: Show[] = [
    {
      "id": 15,
      "url": "http://www.tvmaze.com/shows/15/constantine",
      "name": "Constantine",
      "language": "English",
      "status": "Ended",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/154.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/154.jpg"
      },
      "summary": "<p>Based on the wildly popular comic book series \"Hellblazer\" from DC Comics, seasoned demon hunter and master of the occult John Constantine is armed with a ferocious knowledge of the dark arts and a wickedly naughty wit. He fights the good fight - or at least he did. With his soul already damned to hell, he's decided to abandon his campaign against evil until a series of events thrusts him back into the fray, and he'll do whatever it takes to protect the innocent. With the balance of good and evil on the line‎, <b>Constantine </b>will use his skills to travel the country, find the supernatural terrors that threaten our world and send them back where they belong. After that, who knows... maybe there's hope for him and his soul after all.</p>",
    },
    {
      "id": 16,
      "url": "http://www.tvmaze.com/shows/16/penny-dreadful",
      "name": "Penny Dreadful",
      "language": "English",
      "status": "Ended",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/48/122237.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/48/122237.jpg"
      },
      "summary": "<p>Some of literature's most terrifying characters, including Dr. Frankenstein and his monster, Dorian Gray, and iconic figures from the novel Dracula are lurking in the darkest corners of Victorian London. They are joined by a core of original characters in a complex, frightening new narrative. <b>Penny Dreadful </b>is a psychological thriller filled with dark mystery and suspense, where personal demons from the past can be stronger than vampires, evil spirits and immortal beasts.</p>"
    },
    {
      "id": 18,
      "url": "http://www.tvmaze.com/shows/18/the-amazing-race",
      "name": "The Amazing Race",
      "language": "English",
      "status": "Running",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/141/352923.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/141/352923.jpg"
      },
      "summary": "<p>From athletes and actors to tattoo artists, social workers and musicians - a diverse mix of teams will need to utilize their street smarts and savvy know-how to compete in the race of their lifetime.</p>"
    },];

  showsFromAppComponents2: Show[] = [
    {
      "id": 19,
      "url": "http://www.tvmaze.com/shows/19/supernatural",
      "name": "Supernatural",
      "language": "English",
      "status": "Running",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/211/528024.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/211/528024.jpg"
      },
      "summary": "<p>This haunting series follows the Winchester brothers as they crisscross the lonely and mysterious back roads of the country in their '67 Chevy Impala, hunting down every evil supernatural force they encounter along the way.</p>"
    }
  ];
  selectedShow: Show = this.showsFromAppComponents1[1];
}
