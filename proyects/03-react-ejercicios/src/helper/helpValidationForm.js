export const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexComments = /^.{1,255}$/

  if (!form.name.trim()) {
    errors.name = "The field 'name' is required"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The field 'name' only accept letters and white spaces"
  }

  if (!form.email.trim()) {
    errors.email = "The field 'e-mail' is required"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The field 'email' it's nos correct"
  }

  if (!form.subject.trim()) {
    errors.subject = 'The field is required'
  }

  if (!form.comments.trim()) {
    errors.comments = "The field 'comments' is required"
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "The filed 'comments' has a maxium of 255 characters"
  }

  return errors
}