$(function(){
  let json =  $.getJSON('C:\MyProjects\countries.json', function(data) {
                $.each(data, function(key, val) {
                    $('#countries').append('<option value="' + val + '">' + key + '</option>');
                });
    });
    //alert(json);

    let securityJson =  $.getJSON('C:\MyProjects\path.json', function(data) {
                  $.each(data, function(key, val) {
                      $('#countries').append('<option value="' + val + '">' + key + '</option>');
                  });
      });
      alert(securityJson);


});

//должно быть в HTML файле для данного примера.
//В данном проекте не работает, поскольку нет поключения к базе. Является тестом для проекта https://github.com/Anna-the-racoon/Test-WebTestCore
// <!-- <select id="countries">
//     <option disabled>Выберите страну</option>
// </select>
// </div> -->
