export const SignupConstant = {
  TITLE: {
    sub: '나만의 특별함을 위해 LENSSIS',
    main: '계정정보를 입력해주세요.',
  },

  ERROR_MESSAGE: {
    id_wrong_number: '아이디는 8글자 이상이여합니다.',
    id_duplicate_check: '아이디 중복 확인 해주세요.',
    id_ducplicate: '이미 존재하는 아이디입니다.',
    email_wrong_form: '유효한 형식의 이메일이 아닙니다.',
    email_duplicate_check: '이메일 중복 확인 해주세요.',
    email_duplicate: '이미 존재하는 이메일입니다.',
    password_wrong_form:
      '비밀번호는 영문, 숫자, 특수기호로 이루어진 8글자 이상이여합니다.',
    password_not_match: '비밀번호가 일치하지 않습니다.',
    no_id: '아이디를 입력하세요.',
    no_email: '이메일을 입력하세요.',
    no_username: '닉네임을 입력하세요.',
    no_password: '비밀번호를 입력하세요.',
    phone_wrong_form: '올바른 형식의 전화번호가 아닙니다.',
  },

  MESSAGE: {
    password_form_guide:
      '영문과 숫자, 특수기호(@$!%*#?&)를 포함한 8자리 이상의 비밀번호를 입력하세요.',
    password_match: '비밀번호가 일치합니다.',
    password_usable: '사용 가능한 비밀번호입니다.',
    success: '회원가입에 성공하셨습니다.',
    id_usable: '사용가능한 아이디입니다.',
    email_usable: '사용가능한 이메일입니다.',
  },

  CATEGORY: {
    id: '아이디',
    username: '닉네임',
    email: '이메일',
    password: '비밀번호',
    passwordCheck: '비밀번호 확인',
    gender: '성별',
    phone: '전화번호',
    birthday: '생일',
    optional: '( 선택 )',
    duplicate_check: '중복확인',
  },

  GENDER: {
    female: '여성',
    male: '남성',
  },

  default_value: {
    loginId: '',
    password: '',
    username: '',
    email: '',
    phone: '010-1111-1111',
    birthday: '2000-01-01',
    gender: 'X',
  },
};
