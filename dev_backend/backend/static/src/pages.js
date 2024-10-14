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
	<div id="main" class="container-fluid">
      <div
        class="d-flex flex-column justify-content-center align-items-center gap-5"
        style="min-height: 90vh"
      >
        <div class="d-flex flex-column align-items-center text-center">
          <h1 id="game_name2" class="display-6 color-custom"></h1>
          <p class="lead">Fullstack Gaming Website</p>
          <div class="d-flex flex-column flex-md-row gap-3 justify-content-center" id="app"></div>
		    <a id="play_button" type="button" class="btn btn-light fw-bold" data-link=register
				>Start Playing</a
			  >
        </div>
        <div class="blob"></div>
        <div class="row justify-content-center gap-1">
          <div class="col-12 col-sm-6 col-md-3">
            <div
              id="card-present"
              class="card mb-3 h-80"
              style="
                background-color: rgba(255, 255, 255, 0.01);
                backdrop-filter: blur(10px);
                color: white;
                border-color: #393c49;
              "
            >
              <div class="card-header fw-bold">Pong</div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title montserrat-bold">
                  1. Classic Arcade Game
                </h5>
                <p class="card-text">
                  Pong is one of the first computer games created. This simple
                  "tennis-like" game features two paddles.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div
              class="card mb-3 h-80"
              style="
                background-color: rgba(255, 255, 255, 0.01);
                color: white;
                border-color: #393c49;
              "
            >
              <div class="card-header fw-bold">Chess</div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title montserrat-bold">
                  2 . Strategic Board Game
                </h5>
                <p class="card-text">
                  Chess is a two-player strategy game played on a board with 64
                  squares arranged in an 8×8 grid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
			<h3 class="text-center text-light fw-bold">Register</h3>
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
					>Register</button>
		  </form>
		</div>
	  `;
	}
	
	render() {
		super.render(); // Call the parent render method
		this.attachFormListener(); // Now attach the listener here
	  }
	  
	attachFormListener() {
		const form = document.getElementById('register_form');
		form.addEventListener('submit', async (e) => {
		  e.preventDefault(); // Prevent the default form submission
		  
		  const email = document.getElementById('registerEmail').value;
		  const password = document.getElementById('registerPassword').value;
	
		  // Prepare the data to send
		  const data = { email, password };
	
		  try {
			// Send data to the backend
			const response = await fetch('/api/register/', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(data),
			});
	
			if (response.ok) {
			  const result = await response.json();
			  console.log('Registration successful:', result);
			  // Optionally, redirect to login or home page
			  // window.location.href = '/';
			} else {
			  const error = await response.json();
			  console.error('Registration failed:', error);
			  alert('Registration failed: ' + error.message);
			}
		  } catch (error) {
			console.error('Error:', error);
			alert('An error occurred: ' + error.message);
		  }
		});
	  }
  }