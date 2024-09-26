import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error?: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.error = undefined;
    if (!this.loginForm.valid) return;

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (response) => {
        if (response) this.router.navigate(['/']);
        // Lógica cuando la autenticación sea exitosa
        console.log('Autenticación exitosa:', response);
      },
      error: ({ error }) => {
        // Manejar errores de autenticación
        this.error = error.error;
        console.error('Error en la autenticación:', error);
      },
      complete: () => {
        // Lógica cuando la operación esté completa (opcional)
        console.log('Operación completa');
      },
    });
  }
}
