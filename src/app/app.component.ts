import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Temperature_Converter_C2F_F2C_04102024';

  c = "";
  f = "";
  constructor() {}

  ngOnInit() {}

  onChange(value: string | null, type: "c" | "f") {
    if (value === null) {
      this.c = "";
      this.f = "";
      return;
    }

    const temperature = Number(value);
    if (type === "c") {
      this.f = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }
}
