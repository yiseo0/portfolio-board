/**
 * 날짜를 yyyy-mm-dd 형식으로 바꿔주는 함수
 */
export const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = zeroPad(_date.getMonth() + 1);
  const dd = zeroPad(_date.getDate());

  return `${yyyy}-${mm}-${dd}`;
};

/**
 * 숫자 앞에 0 붙이는 함수
 */
export const zeroPad = (number) => {
  return String(number).padStart(2, "0");
};
