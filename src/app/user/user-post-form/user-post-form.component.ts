import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-post-form',
  templateUrl: './user-post-form.component.html',
  styleUrls: ['./user-post-form.component.css']
})
export class UserPostFormComponent {
  userForm: FormGroup;
  emailRegex = '^([a-zA-Z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)(?:\.[A-Za-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)' +
  '*@([a-zA-Z0-9]([\-]?[a-zA-Z0-9]+)*\.)+([a-zA-Z0-9]{1,64})$';

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'name': ['karan', [Validators.required]],
      'username': ['kmthakor', [Validators.required]],
      'email': ['kmthakor@gmail.com', [Validators.required, Validators.pattern(this.emailRegex)]],
      'url': ['google.com', [Validators.required]],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required]],
      'amount': ['5000', [Validators.required]],
      'comment': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]]
    });

    if (this.userForm.get('name').value === this.userForm.get('username').value) {
      this.userForm.get('email').patchValue('kmthakor@yahoo.com');
    }
  }

  submit() {
    console.log(this.userForm.value);
  }

  consoleText(object) {
  }

}
