// @param {event};
// @return {void};
//Code Reference: https://www.learnwithjason.dev/blog/get-form-values-as-json

const formToJson = (elements) =>
  [].reduce.call(
    elements,
    (data, element) => {
      if (isValidElement(element)) {
        data[element.name] = element.value;
      }

      return data;
    },
    {},
  );

const isValidElement = (element) => {
    return element.name && element.value;
}

const handleFormSubmit = (event) => {

    event.preventDefault(); //prevents the default of zero data being submitted.

    const data = formToJson(form.elements); // call the data back from the submit form.

    const dataContainer = document.getElementsByClassName('results__display')[0]; //prints the form being submitted at Array Index 0. (First Item)

    dataContainer.textContent = JSON.stringify(data, null, '  ');

}

const form = document.getElementsByClassName('traveler-form')[0];
form.addEventListener('submit', handleFormSubmit);