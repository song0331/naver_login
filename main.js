function emailReg(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email)
}

function pwReg(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  
  return re.test(password);
}

const user = {
  email : 'green@gmail.com',
  password : 'green123!@'
}

$('#user_id').on('input', function (e) {
  if (emailReg($(e.target).val())) {
    $('#userEmailError').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#userEmailError').addClass('show');
  } else {
    $('#userEmailError').removeClass('show');
  }
})

$('#user_pw').on('input', function (e) {
  if (pwReg($(e.target).val())) {
    $('#userPasswordError').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#userPasswordError').addClass('show');
  } else {
    $('#userPasswordError').removeClass('show');
  }
})

$('.login_btn').on('click', function(e){
  e.preventDefault();
  console.log($('#user_id').val());
  console.log($('#user_pw').val());

  if($('#user_id').val() == user.email && $('#user_pw').val() == user.password){
    alert('로그인 되었습니다!');
  }else{
    alert('잘못된 정보 입니다!');
  }
})