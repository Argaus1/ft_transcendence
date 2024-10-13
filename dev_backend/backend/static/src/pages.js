import { fetchData } from './data.js';

export class Page {
  constructor() {
    this.template = '';
  }

  render() {
    document.getElementById('app').innerHTML = this.template;
  }
}

export class HomePage extends Page {
	constructor() {
	  super();
	  this.template = `
		<a id="play_button" type="button" class="btn btn-light fw-bold" data-link=register
				>Start Playing</a
			  >
	  `;
	}
  }

  export class RegisterPage extends Page {
	constructor() {
	  super();
	  this.template = `
		<div
		  id="register_container"
		  class="d-flex justify-content-center align-items-center"
		  style="height: 85vh"
		>
		  <div class="blob"></div>
		  <form
			id="register_form"
			class="p-4"
			style="
			  width: 400px;
			  border-radius: 10px;
			  background-color: transparent;
			  color: white;
			  border: 2px solid #393c49;
			"
		  >
			<button
			  id="back_button"
			  type="button"
			  class="btn btn-light fw-bold opacity"
			>
			  Back
			</button>
			<h3 class="text-center text-light fw-bold">Login</h3>
			<div class="mb-3">
			  <label for="registerEmail" class="form-label"
				>Email address</label
			  >
			  <input
				type="email"
				class="form-control text-bg-dark"
				id="registerEmail"
				aria-describedby="emailHelp"
			  />
			  <div id="emailHelp" class="form-text text-white">
				We'll never share your email with anyone else.
			  </div>
			</div>
			<div class="mb-3">
			  <label for="registerPassword" class="form-label">Password</label>
			  <input
				type="password"
				class="form-control text-bg-dark"
				id="registerPassword"
			  />
			  <div id="passwordHelpBlock" class="form-text text-white">
				Your password must be 8-20 characters long.
			  </div>
			</div>
			<div class="mb-3 form-check">
			  <input type="checkbox" class="form-check-input" id="stayConnected" />
			  <label class="form-check-label" for="stayConnected"
				>Stay Connected</label
			  >
			</div>
			<button id="register_button"
					type="submit"
					class="btn btn-outline-light"
					>Login</button>
		  </form>
		</div>
	  `;
	}
  }