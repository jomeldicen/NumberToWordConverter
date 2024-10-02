import { Component, OnInit } from '@angular/core';
import { NumberConverterService } from '../number-converter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-number-converter-output',
  templateUrl: './number-converter-output.component.html',
  styleUrl: './number-converter-output.component.css'
})
export class NumberConverterOutputComponent implements OnInit {
  amountInNum!: any;
  amountInWords!: string;
  loading: boolean = false;
  errorMessage!: string;
  
  constructor(private numberConverterService: NumberConverterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.amountInNum = params.get('num') == null? 0 : params.get('num');
      this.getConvertedNumber(this.amountInNum);
    })
  }

  public getConvertedNumber(amount: any) {
    this.loading = true;
    this.errorMessage = "";
    this.numberConverterService.getConvertedNumber(amount).subscribe({
      next: (result) => {
        console.log('response received')
        this.amountInWords = result.numberInWords; 
      },
      error: (error) => {
        // Handle error callback
        console.error(error); 

        this.errorMessage = error;
        this.loading = false;
      },
      complete: () => {
        // Handle completion callback
        console.log('Request completed')      
        this.loading = false; 
      }
    });
  }
}
