// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Definimos el FormGroup con FormControls tipados (nonNullable para simplificar)
  registroForm = new FormGroup({
    nombre: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)]
    }),
    apellido: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)]
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    contrasena: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  // getter tipado (opcional) para usar en template
  get f(): { [K in keyof typeof this.registroForm.controls]: AbstractControl } {
    return this.registroForm.controls as any;
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      alert('Registro exitoso');
      this.registroForm.reset();
    } else {
      this.registroForm.markAllAsTouched();
      alert('Por favor completar todos los campos requeridos');
    }
  }
}
