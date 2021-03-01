// console.log('JS Loaded')


function checkForm( theForm )
{
  var result = /[^a-z0-9\\,\\.\\;]/g( theForm.data.value );

  if( result )
  {
    alert('One or more illegal characters were found, the first being character ' + ( result.index + 1 ) + ' "' + result +'".\
\
Please edit your input.');
  }

  return !result;
}