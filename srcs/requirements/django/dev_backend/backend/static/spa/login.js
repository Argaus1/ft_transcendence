import { Page } from '../src/pages.js';

export class LoginPage extends Page {
	constructor() {
	  super();
	  this.template = `
		<div
		  id="login_container"
		  class="d-flex justify-content-center align-items-center"
		  style="height: 85vh"
		>
		  <div class="blob"></div>
		  <form
			id="login_form"
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
			  <label for="loginEmail" class="form-label">Email address</label>
			  <input
				type="email"
				class="form-control text-bg-dark"
				id="loginEmail"
				aria-describedby="emailHelp"
			  />
			</div>
			<div class="mb-3">
			  <label for="loginPassword" class="form-label">Password</label>
			  <input
				type="password"
				class="form-control text-bg-dark"
				id="loginPassword"
			  />
			</div>
			<div class="mb-3 form-check">
			  <input type="checkbox" class="form-check-input" id="stayConnected" />
			  <label class="form-check-label" for="stayConnected"
				>Stay Connected</label
			  >
			</div>
			<div class="d-flex justify-content-between">
                <a href="#" class="text-white">Forgot password?</a>
                <a href="#" data-link=register class="text-white">Create an account</a>
            </div>
             <div class="d-flex justify-content-between flex-column gap-2">
                <button id="login_button" 
                type="submit" 
                class="btn btn-outline-light full-width"
                >Login</button>
	            <button id="login_42"
	            type="submit" 
	            class="btn btn-outline-light full-width "
	            >Login with 42</button>
             </div>
		  </form>
		</div>
	  `;
	}
	
	render()
	{
		super.render(); // Call the parent render method
		this.attachFormLoginListener(); // Now attach the listener here
	}
	
	attachFormLoginListener() {
		const form = document.getElementById('login_form');
		form.addEventListener('submit', async (e) => {
		  e.preventDefault(); // Prevent the default form submission
		  
		  const email = document.getElementById('loginEmail').value;
		  const password = document.getElementById('loginPassword').value;
	
		  // Prepare the data to send
		  const data = { email, password };

		  try {
			// Send data to the backend
			const response = await fetch('/api/login/', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(data),
			});
	
			if (response.ok) {
			  const result = await response.json();
			  console.log('Login successful:', result);
			  // Optionally, redirect to home page or another page
			  // window.location.href = '/';
			} else {
			  const error = await response.json();
			  console.error('Login failed:', error);
			  alert('Login failed: ' + error.message);
			}
		  } catch (error) {
			console.error('Error:', error);
			alert('An error occurred: ' + error.message);
		  }
		});
	  }
}