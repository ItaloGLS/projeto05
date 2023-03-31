$(document).ready(function() {
    $('#form-media').submit(function(event) {
      event.preventDefault();
      var nota1 = parseFloat($('#nota1').val());
      var peso1 = parseFloat($('#peso1').val());
      var nota2 = parseFloat($('#nota2').val());
      var peso2 = parseFloat($('#peso2').val());
      var media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);
      $('#resultado').text('A média ponderada é ' + media.toFixed(2));
    });
  });
  