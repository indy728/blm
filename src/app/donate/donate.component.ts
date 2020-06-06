import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

// import { Fund } from '../shared/fund'
import { FUNDS } from '../shared/funds'


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})


export class DonateComponent implements OnInit {

    funds = {
        BASF: [],
        BABF: [],
        NRF: [],
        NSF: [],
        NBF: []
    }

    constructor(
        private renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    ngOnInit(): void {
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://www.gofundme.com/static/js/embed.js';
        s.text = ``;
        s.defer = true
        this.renderer2.appendChild(this._document.body, s);

        this.buildFundObject(FUNDS)
    }

    buildFundObject = fundsArray => {
        fundsArray.forEach(fund => {
            if (this.funds.hasOwnProperty(fund.section)) {
                this.funds[fund.section].push(fund)
            } else console.log(`fund section error: ${fund.section}`)
        })

        console.log(this.funds);
        
    }

}
