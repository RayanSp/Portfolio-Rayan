<script>
  import Header from "$lib/components/Header.svelte";
  import Loader from "$lib/components/svg/loader.svelte";
  import { enhance } from "$app/forms";

  let isSubmitting = false;
  let successMessage = "";
  let errorMessage = "";

  function handleEnhance({ formElement }) {
    const handleSubmit = async ({ result }) => {
      isSubmitting = false;
      successMessage = "";
      errorMessage = "";

      if (result.type === "failure") {
        errorMessage = result.data.error;
      } else if (result.type === "success") {
        formElement.reset();
        successMessage = result.data.message;
      }
    };
    return handleSubmit;
  }
</script>

<Header />

<section class="form-container">
  <form
    method="POST"
    use:enhance={handleEnhance}
    on:submit={() => (isSubmitting = true)}
    class="contact-form"
  >
    <h1>Contact</h1>
    <fieldset class="form-wrapper">
      <label for="name" class="form-label"><span>Name</span></label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="Your name..."
        class="input-field"
      />

      <label for="email" class="form-label"><span>Email</span></label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Your email..."
        class="input-field"
      />

      <label for="message" class="form-label"><span>Message</span></label>
      <textarea
        name="message"
        id="message"
        required
        placeholder="Your message..."
        class="input-field"
      ></textarea>
    </fieldset>

    {#if successMessage}
      <p class="success-message">{successMessage}</p>
    {/if}

    {#if errorMessage}
      <p class="error-message">{errorMessage}</p>
    {/if}

    <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
      {#if isSubmitting}
      <Loader />
      {:else}
        Verstuur
      {/if}
    </button>
  </form>
</section>

<style>
  /* Section Styling */
  .form-container {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background: var(--c-container);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  /* Form Styling */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  h1 {
    color: var(--c-white);
    text-align: center;
  }

  /* Wrapper for Form Elements */
  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
  }

  /* Labels */
  .form-label {
    font-weight: bold;
    font-size: 14px;
    color: var(--c-white);
  }

  /* Input and Textarea Styling */
  .input-field {
    width: 20rem;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out;
    margin-bottom: 2rem;
  }

  .input-field:focus {
    border-color: var(--c-lightblue);
    outline: none;
  }

  /* Button Styling */
  .btn {
    padding: 10px 14px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .btn-primary {
    background-color: var(--c-lightblue);
    color: #fff;
  }

  .btn-primary:hover {
    background-color: var(--c-darkblue);
  }

  input:valid {
    border: 2px solid lightgreen;
  }

  textarea:valid {
    border: 2px solid lightgreen;
  }

  form:invalid .btn-primary {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  /* Success and Error Messages */
  .success-message,
  .error-message {
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
  }

  .success-message {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  .error-message {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
</style>
