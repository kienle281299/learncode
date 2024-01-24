
// document.getElementById("content").innerHTML =
//   "Tài liệu học Javascript toàn tập";
//   console.log("hello");
//   console.log("world");
//   console.log(1+1+1);
  //biến truyền giá trị 
//   let language;
//   language = "hello";
//   console.log(language);

// let name3 = "language";
// console.log(name3);

// let language3 = "JavaScript";
// let message = "Hello";
// let date = "Monday";
// thay đổi biến
// let language2 = "language";
// console.log(language2);
// language2 = "react"
// console.log(language2);

// let num = 100; // Đúng
// let _result3@ = "haha"; // Sai: vì sử dụng kí tự đặc biệt @
// let имя_abc = "hehehe"; // Đúng: được phép sử dụng kí tự không phải Latinh
// let 2me = 'love'; // Sai: vì bắt đầu bằng số
// let I_WANT_TO_EAT = "just eat it"; // Đúng
// let _dientihinhvuong = 10000; // Đúng: được phép bắt đầu dấu _
// let a%b = 50; // Sai: vì có kí tự đặc biệt %
// let var = 'oh no'; // Sai: vì tên biến trùng từ khóa var

//////////////////////
// let name2= "lam";
// let message1 = name2;
// console.log(message1);

// let x = "hello";
// let y = "world";
// x = y;
// y = "hello";
// console.log(x, y);

//hằng Hằng là "tên biểu tượng" đại diện cho một giá trị không thay đổi trong chương trình.

// const <tên hằng> = <giá trị của hằng>;
// const PI = 3.14159;
// console.log(PI);
// const COLOR_ORANGE = "#FF4500";
// const COLOR_YELLOW = "#FFFF00";
// console.log(COLOR_ORANGE);
// console.log(COLOR_YELLOW);
// let currentColor = COLOR_ORANGE;
// console.log(currentColor);

// Kiểu dữ liệu string
// String là kiểu dữ liệu dùng để biểu diễn chữ, văn bản, đoạn văn bản,...
// Có ba cách để biểu diễn string trong JavaScript:
// Dùng dấu nháy đơn (')
// Dùng dấu nháy kép (")
// Dùng dấu "backtick" (`)
// const msg1 = "Đây là string dùng dấu nháy đơn";
// const msg2 = "Đây là string dùng dấu nháy kép";
// const msg3 = `Đây là string dùng dấu backtick`;
// Dấu nháy đơn và dấu nháy kép là hoàn toàn giống nhau.
// Riêng với dấu "backtick", bạn có thể sử dụng biến, hằng hoặc thậm chí viết một biểu thức trong đó, với cú pháp ${…}, ví dụ:
// // Truyền biến vào trong dấu "backtick"
// let name = "Lam";
// console.log(`My name is ${name}`); // My name is Lam
// // Truyền hằng vào trong dấu "backtick"
// const language = "JavaScript";
// console.log(`You are learning ${language}`); // You are learning JavaScript
// // Truyền vào biểu thức
// console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
// String trong JavaScript có thể chỉ gồm 1 kí tự "a", nhiều kí tự "abc" hoặc không kí tự nào "" (empty string).

// Chuyển đổi kiểu dữ liệu sang string
// Để chuyển đổi bất kỳ kiểu dữ liệu nào sang string, bạn có thể dùng hàm String(value).
// console.log(String(1)); // "1"
// console.log(String(NaN)); // "NaN"
// console.log(String(Infinity)); // "Infinity"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"
// Bạn có thấy rằng, chuyển đổi kiểu dữ liệu sang string khá đơn giản về dễ hiểu phải không?
// Chỉ cần thêm cặp dấu nháy kép "" là xong. Còn về hình thức thì mọi thứ vẫn giữ nguyên.

// Chuyển đổi kiểu dữ liệu sang number
// Khi thực hiện tính toán, JavaScript sẽ chuyển đổi các kiểu dữ liệu về kiểu dữ liệu number.
// Ví dụ phép chia giữa hai string:
// console.log("10" / "2"); // 5
// Bởi vì string "10" và "2" được chuyển đổi về kiểu number thành số 10 và số 2. Nên kết quả thu được là 5.
// Để chuyển đổi bất kỳ kiểu dữ liệu nào thành number, bạn có thể dùng hàm Number(value), ví dụ:
// console.log(Number("")); // 0
// console.log(Number("Hello")); // NaN
// console.log(Number("10")); // 10
// console.log(Number(" ")); // 0
// console.log(Number(" 99 ")); // 99
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// Bạn để ý một số quy luật khi chuyển đổi kiểu dữ liệu về number như sau:
// null chuyển về number thành 0.
// undefined chuyển về number thành NaN.
// true chuyển về number thành 1.
// false chuyển về number thành 0.
// Một giá trị string sau khi bỏ đi dấu cách ("whitespace") ở đầu và cuối string, nếu thành phần còn lại mà là:
// String rỗng "" thì chuyển về thành số 0.
// String khác rỗng và có thể chuyển về number thì sẽ biến thành số tương ứng.
// String khác rỗng và không thể chuyển về number thì trở thành NaN.

// Chuyển đổi kiểu dữ liệu sang boolean
// Để chuyển đổi kiểu dữ liệu sang boolean, bạn có thể dùng hàm Boolean(value).
// Quy luật chuyển đổi sang boolean như sau:
// Những giá trị "empty" như: số 0, string rỗng "", null, undefined và NaN sẽ trở thành false.
// Những giá trị còn lại sẽ trở thành true.
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(10n)); // true
// console.log(Boolean(Infinity)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("  ")); // true
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false

// alert(message);
// alert("Say hello from kungfutech.edu.vn");

// const result = confirm("Bạn muốn tiếp tục sử dụng chương trình?");
// alert(result);

// const age = prompt("How old are you!", 18);
// alert("You are " + age + " years old!");

// console.log("5" + 2); // "52"
// console.log("5" - 2); // 3
// console.log("5" * 2); // 10
// console.log("5" / 2); // 2.5
// console.log("5a" % "2"); // NaN
// console.log("5b" ** "2"); // NaN

// let n = 4;
// n += 5;
// console.log(n);
// toán tử ++ và -- chỉ dùng được với biến. Nếu bạn dùng nó trực tiếp với giá trị, kiểu như 4++ hay --3 thì bạn sẽ bị lỗi cú pháp.

// let a = 2;
// let x = a++;
// console.log(a); // 3
// console.log(x); // 2
// console.log(a);//3

// Toán tử dấu phẩy
// Toán tử dấu phẩy cho phép thực hiện một vài biểu thức (cách nhau bằng dấu phẩy), nhưng kết quả thì chỉ lấy ở biểu thức cuối cùng.
// Ví dụ:
// let a = 1;
// let x = ((a = a + 1), a + 4);
// console.log(a); // 2
// console.log(x); // 6

// Để so sánh hai kí tự với nhau, JavaScript so sánh giá trị của hai kí tự (dạng số) ở bảng mã Unicode.
// Trong bảng mã này, ta có thứ tự 0 < 9 < A < Z < a < z.
// Ngoài việc so sánh các chữ cái Latinh ra thì JavaScript còn có thể so sánh các chữ cái không phải Latinh.


// Khi so sánh các toán hạng khác kiểu dữ liệu, JavaScript chuyển đổi giá trị các toán hạng ra dạng số, ví dụ:
// console.log("5" > 4); // true, vì "5" chuyển thành 5
// console.log("01" == 1); // true, vì "01" chuyển thành 1
// console.log("11" == 1); // false, vì "11" chuyển thành 11
// Đối với kiểu dữ liệu boolean, true sẽ chuyển thành 1 và false chuyển thành 0.
// console.log(true == 1); // true
// console.log(false == 0); // true
// Việc so sánh khác kiểu dữ liệu sử dụng toán tử bằng "không nghiêm ngặt" == dẫn đến một số trường hợp "phi logic", ví dụ:
// console.log("" == 0); // true
// console.log("0" == 0); // true
// console.log("" == "0"); // false
// Kì lạ phải không?Nếu theo tính chất "bắc cầu" trong toán học thì nếu "" == 0 là true và "0" == 0 là true, suy ra "" == "0" cũng phải là true (vì cùng bằng 0).Nhưng thực tế lại không phải như vậy, hai phép so sánh đầu tiên là so sánh khác kiểu dữ liệu, nên "" và "0" đều được chuyển thành dạng số và bằng 0.Trong khi phép so sánh thứ ba là so sánh cùng kiểu dữ liệu, nên không có quá trình chuyển đổi dữ liệu xảy ra. Dẫn đến, kết quả của phép so sánh cuối là false.Để giải quyết vấn đế này, JavaScript tạo ra toán tử so sánh bằng "nghiêm ngặt" ===.

// So sánh bằng nghiêm ngặt
// Đối với toán tử so sánh bằng "nghiêm ngặt", JavaScript sẽ không thực hiện chuyển đổi kiểu dữ liệu.Nói cách khác, hai giá trị khác kiểu dữ liệu thì luôn khác nhau, ví dụ:
// // So sánh bằng không nghiêm ngặt
// console.log("" == 0); // true
// // So sánh bằng nghiêm ngặt
// console.log("" === 0); // false
// Tương tự với so sánh bằng nghiêm ngặt, JavaScript cũng có so sánh khác nghiêm ngặt, ví dụ:
// // So sánh khác không nghiêm ngặt
// console.log("" != 0); // false
// // So sánh khác nghiêm ngặt
// console.log("" !== 0); // true
// 💡 Để tránh mắc phải những lỗi sai ngớ ngẩn khi so sánh trong JavaScript, bạn nên sử dụng toán tử so sánh bằng "nghiêm ngặt" === và toán tử so sánh khác "nghiêm ngặt" !==.


// Để tránh những tình huống "phi logic" trên, bạn chỉ nên so sánh null hoặc undefined khi sử dụng toán tử so sánh bằng "nghiêm ngặt" (===) hoặc toán tử so sánh khác "nghiêm ngặt" (!==).
// Không nên sử dụng toán tử >, <, >= và <= với null và undefined.
// Trường hợp một biến có thể null hoặc undefined thì bạn nên kiểm tra giá trị có bằng null hoặc undefined hay không để xử lý trước. Khi biến khác null và undefined rồi thì mới thực hiện so sánh với các toán tử >, <, >= và <= sau.


// Thứ tự ưu tiên của các toán tử so sánh
// Các toán tử so sánh có thứ tự ưu tiên giống nhau. Khi trong biểu thức có nhiều toán tử so sánh, thứ tự thực hiện là từ trái sang phải.
// console.log(3 > 2 > 1); // false
// Thoạt đầu nhìn qua, bạn sẽ thấy kết quả trên là vô lý phải không?Vì theo toán học thì chắc chắn số 3 lớn hơn số 2 và số 2 lớn hơn số 1, nên kết quả (2) phải bằng true mới hợp lý.Nhưng nếu bạn áp dụng đúng quy tắc thứ tự ưu tiên vào đây, bạn sẽ thấy kết quả trên là hoàn toàn đúng.Vì JavaScript sẽ thực hiện so sánh hai số đầu tiên trước, 3 > 2 là đúng nên kết quả của phép so sánh này là true. Khi đó, mình có thể viết lại như sau:
// console.log(true > 1); // false
// Rõ ràng, đây là phép so sánh hai kiểu dữ liệu khác nhau. Vì vậy, true được chuyển thành dạng số và bằng 1. Mà 1 > 1 là false.Tóm lại, kết quả của phép so sánh trên là false.
// Khi thực hiện tính toán, so sánh với các toán tử, bạn phải ghi nhớ thứ tự ưu tiên của các toán tử để biết chính xác thứ tự thực hiện của các phép toán.
// Trường hợp bạn không chắc chắn về thứ tự thực hiện, bạn nên sử dụng cặp dấu ngoặc đơn (...) (toán tử nhóm) để thực hiện phép toán một cách chính xác.
// Đoạn code trên có thể viết lại thành console.log((3 > 2) > 1). Ở đây, mình đã nhóm 3 > 2 thành một nhóm, nên chắc chắn phép toán này thực hiện trước.
// Nếu muốn 2 > 1 thực hiện trước bạn viết lại thành console.log(3 > (2 > 1)). Kết quả của câu lệnh này là true.


// Tổng kết
// Sau đây là những kiến thức cơ bản cần nhớ về toán tử so sánh trong JavaScript:
// Toán tử so sánh là toán tử hai ngôi dùng để so sánh giá trị của hai toán hạng với nhau. Và các toán tử so sánh trong JavaScript bao gồm:
// Toán tử so sánh lớn hơn > và toán tử so sánh nhỏ hơn <.
// Toán tử so sánh lớn hơn hoặc bằng >= và toán tử so sánh nhỏ hơn hoặc bằng <=.
// Toán tử so sánh bằng "không nghiêm ngặt" == và toán tử so sánh bằng "nghiêm ngặt" ===.
// Toán tử so sánh khác "không nghiêm ngặt" != và toán tử so sánh khác "nghiêm ngặt" !==.
// Kết quả của phép so sánh là giá trị kiểu boolean.
// Khi so sánh string, JavaScript thực hiện so sánh từng kí tự từ trái sang phải.
// Khi so sánh các giá trị với kiểu dữ liệu khác nhau, JavaScript chuyển các giá trị đó thành dạng số (trừ trường hợp so sánh với toán tử bằng "nghiêm ngặt" === và toán tử khác "nghiêm ngặt" !==).
// Hai giá trị null và undefined bằng nhau (khi sử dụng toán tử ==) và luôn khác các giá trị còn lại.
// Không nên sử dụng toán tử >, <, >= và <= với null và undefined. Nếu các biến có thể bằng null hoặc undefined thì bạn nên kiểm tra giá trị có bằng null hoặc undefined hay không để xử lý trước. Khi biến khác null và undefined rồi thì mới thực hiện so sánh với các toán tử >, <, >= và <= sau.
// Thứ tự ưu tiên của các toán tử so sánh là giống nhau. Nếu trong câu lệnh có nhiều toán tử so sánh thì thứ tự thực hiện là từ trái sang phải.

// Kết quả của các phép so sánh sau là gì?
// console.log(15 > 9); // (1)
// console.log("no" <= "none"); // (2)
// console.log("3" >= "24"); // (3)
// console.log("3" > 24); // (4)
// console.log(null < undefined); // (5)
// console.log(undefined == null); // (6)
// console.log(undefined === null); // (7)
// console.log(null == "\n0\n"); // (8)
// console.log(null === +"\n0\n"); // (9)
// console.log(null > -1); // (10)
// Xem đáp án
// console.log(15 > 9); // true
// console.log("no" <= "none"); // true
// console.log("3" >= "24"); // true
// console.log("3" > 24); // false
// console.log(null < undefined); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(null == "\n0\n"); // false
// console.log(null === +"\n0\n"); // false
// console.log(null >= -1); // true
// Giải thích:
// Hiển nhiên số 15 lớn hơn số 9.
// Đây là so sánh hai string. Quy trình là so sánh kí tự lần lượt từ trái sang phải. Thành phần "no" giống nhau. Suy ra "none" lớn hơn "no" vì "none" nhiều kí tự hơn.
// Đây cũng là so sánh hai string. Kí tự đầu tiên "3" lớn hơn kí tự "2" nên suy ra "3" lớn hơn "24".
// Đây là so sánh hai kiểu dữ liệu khác nhau. Do đó, string "3" sẽ chuyển thành số 3. Hiển nhiên số 3 nhỏ hơn số 24.
// Hai giá trị null và undefined chỉ bằng nhau khi sử dụng toán tử ==. Còn lại sẽ khác nhau và khác các giá trị khác. Nên kết quả là false.
// Giải thích tương tự như (5).
// Giải thích tương tự như (5).
// Giải thích tương tự như (5).
// Giải thích tương tự như (5).
// Khi sử dụng toán tử > giữa null và một số, giá trị null sẽ chuyển thành dạng số và bằng số 0. Mà hiển nhiên, số 0 sẽ lớn hơn số -1. Vì vậy, đáp án là true.


// console.log(false || false || true);

// const hour = 20;
// if (hour < 9 || hour > 17) {
//   console.log("Ngoài giờ làm việc"); // câu lệnh này được thực hiện
// }

// const fullName = "";
// const nickName = "jsDev";
// const displayName = fullName ||  "Người dùng ẩn danh" ||nickName ;
// console.log(displayName); // jsDev

// true || console.log("Câu lệnh này không được thực hiện"); // (1)
// false || console.log("Câu lệnh này được thực hiện"); // (2)

// console.log(1 && 0); // 0 (giá trị falsy đầu tiên là 0)
// console.log(null && 2); // null (giá trị falsy đầu tiên là null)
// console.log(10 && "" && undefined && 0); // "" (giá trị falsy đầu tiên là "")
// console.log("n" && undefined && 10); // undefined (giá trị falsy đầu tiên là undefined)
// console.log(10 && "a"); // "a" (không có giá trị falsy, trả về giá trị cuối cùng)


// console.log(null || NaN || 0 || null);


// Câu lệnh if
// Câu lệnh if(...) sẽ kiểm tra điều kiện biểu thức bên trong cặp dấu ngoặc đơn (). Nếu kết quả là true thì một khối code sẽ được thực thi.
// Ví dụ về câu lệnh if:
// const x = 2;
// if (x % 2 === 0) console.log("x is an even number");
// Vì x = 2 nên x chia 2 dư 0. Do đó, x % 2 === 0 là true. Vì vậy, câu lệnh console.log trên được thực hiện.
// Để thực hiện nhiều câu lệnh, bạn sử dụng cặp dấu {}:
// const x = 2;
// if (x % 2 === 0) {
//   console.log("x is an even number");
//   console.log("done!");
// }
// Kết quả
// x is an even number done!
// 💡 Theo mình, dù khối code sau câu lệnh if là một hay nhiều câu lệnh thì bạn cũng nên dùng cặp dấu {} để code dễ đọc hơn. Ngoài ra, mình cũng nhắc lại quy luật chuyển đổi kiểu dữ liệu sang boolean như sau:
// Những giá trị "empty" như: số 0, string rỗng "", null, undefined và NaN sẽ trở thành false.
// Những giá trị còn lại sẽ trở thành true.
// Vì vậy, khối lệnh với điều kiện sau sẽ không bao giờ được thực thi:
// // 0 là giá trị falsy
// if (0) {
//   // các câu lệnh
// }
// Ngược lại, khối lệnh với điều kiện sau lại luôn luôn được thực thi:
// // 1 là giá trị truthy
// if (1) {
//   // các câu lệnh
// }
// Ngoài ra, bạn có thể tính toán giá trị của điều kiện trước khi dùng if:
// const x = 2;
// const result = x % 2 === 0; // kết quả là true
// if (result) {
//   console.log("x is an even number"); // câu lệnh này được thực thi
// }
// Mệnh đề else
// Đi theo câu lệnh if còn có mệnh đề else - dùng để thực hiện một khối lệnh khi điều kiện trong if là giá trị falsy.
// Tiếp theo ví dụ trên:
// const x = 3;
// if (x % 2 === 0) {
//   console.log("x is an even number");
// } else {  console.log("x is an odd number"); // câu lệnh này được thực thi}
// Vì x = 3 nên x chia 2 dư 1. Do đó, x % 2 === 0 là false. Vì vậy, khối lệnh sau else được thực thi.
// Nhiều mệnh đề else if nối tiếp
// Trong trường hợp, bạn cần kiểm tra nhiều điều kiện liên tiếp nhau thì có thể dùng nhiều mệnh đề else if nối tiếp nhau.
// const age = 24;
// if (age < 18) {
//   console.log("Too young!");
// } else if (age > 50) {
//   console.log("Too old!");
// } else {
//   console.log("OK!");
// }
// // OK!
// Đoạn code trên kiểm tra điều kiện age < 18 đầu tiên. Nếu đúng thì câu lệnh console.log đầu tiên được thực thi. Nếu sai thì kiểm tra tiếp đến điều kiện age > 50. Nếu đúng thì câu lệnh console.log thứ hai được thực thi. Nếu vẫn sai thì câu lệnh console.log cuối cùng được thực thi.
// Ở đây, age = 24 nên age < 18 và age > 50 đều là false. Vì vậy, câu lệnh console.log cuối cùng được thực thi.
// Chú ý: Mệnh đề else cuối cùng không bắt buộc phải có.
// Ví dụ trên khi bỏ mệnh đề else cuối cùng:
// const age = 24;
// if (age < 18) {
//   console.log("Too young!");
// } else if (age > 50) {
//   console.log("Too old!");
// }
// Lần này, không có điều kiện nào thỏa mãn, nên không câu lệnh console nào được thực thi.
// Toán tử rẽ nhánh
// Sau đây là những kiến thức cơ bản cần nhớ về toán tử rẽ nhánh ? trong JavaScript.
// Toán tử rẽ nhánh ?
// Trong nhiều trường hợp, bạn cần gán giá trị cho một biến dựa trên một điều kiện, ví dụ:
// const age = 24;
// let enoughAge;
// if (age < 18) {
//   enoughAge = false;
// } else {
//   enoughAge = true;
// }
// console.log(enoughAge); // true
// Để đơn giản hơn, bạn có thể dùng toán tử rẽ nhánh ? (hoặc có thể gọi là toán tử dấu hỏi), với cú pháp:
// const result = condition ? value1 : value2;
// Đây là toán tử ba ngôi với ba thành phần:
// "condition": điều kiện cần kiểm tra
// "value1": giá trị trả về nếu điều kiện "condition" là truthy.
// "value2": giá trị trả về nếu điều kiện "condition" là falsy.
// Ví dụ trên trở thành:
// const age = 24;
// const enoughAge = age < 18 ? false : true;
// console.log(enoughAge); // true
// Ngoài ra, bạn có thể dùng cặp dấu ngoặc đơn () cho dễ nhìn (và chắc chắn hơn - khi bạn không rõ về thứ tự ưu tiên của các toán tử):
// const age = 24;
// const enoughAge = age < 18 ? false : true;
// console.log(enoughAge); // true
// Đây chỉ là ví dụ minh họa. Thực tế trong trường hợp này, bạn có thể code đơn giản hơn như sau:
// const age = 24;
// const enoughAge = age >= 18;
// console.log(enoughAge); // true
// Nhiều toán tử ?
// Cùng xem lại ví dụ về nhiều mệnh đề else if bên trên:
// const age = 24;
// if (age < 18) {
//   console.log("Too young!");
// } else if (age > 50) {
//   console.log("Too old!");
// } else {
//   console.log("OK!");
// }
// Bạn có thể sửa lại bằng cách sử dụng nhiều toán tử ? như sau:
// const age = 24;
// const message = age < 18 ? "Too young!" : age > 50 ? "Too old!" : "OK!";
// console.log(message); // OK!
// Thoạt nhìn thì có vẻ phức tạp, nhưng bạn có thể phân tích kỹ ra như sau sẽ hiểu:
// Dấu ? đầu tiên kiểm tra điều kiện age < 18.
// Nếu đúng thì trả về "Too young!".
// Nếu sai thì tiếp tục xử lý thành phần sau dấu : đầu tiên.
// Tiếp tục, dấu ? thứ hai kiểm tra điều kiện age > 50.
// Nếu đúng thì trả về "Too old!".
// Nếu sai thì tiếp tục xử lý thành phần sau dấu : thứ hai.
// Cuối cùng, khi các điều kiện trên đều false thì sẽ trả về "OK!".


// const value = prompt("Nhập vào số nguyên dương chẵn:", 0);
//       if (value % 2 === 0) {
//         alert("Bạn đã nhập đúng!");
//       } else {
//         alert("Bạn đã nhập sai!");
//       }

      // let a = 10;
      // let b = 20;
      // let result;
      // if (a + b < 10) {
      //   result = "Small";
      // } else {
      //   result = "Big";
      // }
      // console.log(result);
// result = ( a + b ) < 10 ? "Small" : "Big";
// console.log(result);
// let x;
// let y;
// const sum = x ?? y;
// console.log(sum);

// Lệnh switch case là gì?
// Câu lệnh switch - case trong JavaScript là một cấu trúc rẽ nhánh dùng để xác định một danh sách các trường hợp và khối lệnh tương ứng với mỗi trường hợp.
// Khi giá trị đang xét bằng nghiêm ngặt (===) với trường hợp nào thì khối lệnh tương ứng bắt đầu từ trường hợp đó được thực thi.
// Cú pháp câu lệnh switch case
// Lệnh switch case trong JS có cú pháp như sau:
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]
//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]
//   default:
//     ...
//     [break]
// }
// Trong đó:
// Giá trị x được kiểm tra bằng nghiêm ngặt lần lượt với các giá trị value1, value2,...
// Khi tìm thấy giá trị value thỏa mãn thì khối lệnh bắt đầu từ case đó được thực hiện cho đến khi gặp từ khóa break gần nhất, hoặc kết lúc lệnh switch case.
// Nếu không có trường hợp nào thỏa mãn thì khối lệnh ứng với default được thực thi.
// Chú ý: từ khóa break là không bắt buộc.
// Ví dụ lệnh switch case
// Sau đây là ví dụ sử dụng lệnh switch case trong JavaScript:
// const x = 2 + 3;
// switch (x) {
//   case 4:
//     console.log("Less than");
//     break;
//   case 5:
//     console.log("Equal");
//     break;
//   case 6:
//     console.log("Greater than");
//     break;
//   default:
//     console.log("Don't know the answer");
// }
// Equal
// Kết quả
// Equal
// Giải thích:
// Lệnh switch so sánh bằng nghiêm ngặt giá trị của x với các case lần lượt là 4, 5 và 6.
// Với case 4: khác với giá trị của x (là 5), nên quá trình so sánh tiếp tục.
// Với case 5: giá trị này bằng nghiêm ngặt với x, nên khối lệnh bắt đầu từ trường hợp này được thực thi. Vì vậy, giá trị Equal được in ra.
// Nhưng ngay sau đó là từ khóa break, nên lệnh switch case kết thúc.
// Nếu không có từ khóa break thì sao?
// Nếu không có từ khóa break thì toàn bộ khối lệnh phía sau case 5 được thực thi.
// const x = 2 + 3;
// switch (x) {
//   case 4:
//     console.log("Less than");
//   case 5:
//     console.log("Equal");
//   case 6:
//     console.log("Greater than");
//   default:
//     console.log("Don't know the answer");
// }
// Equal
// Greater than
// Don't know the answer
// switch và case đều có thể chứa biểu thức - không chỉ là biến hay hằng.

// Vấn đề so sánh bằng nghiêm ngặt
// Mình muốn nhấn mạnh rằng lệnh switch case sử dụng so sánh bằng nghiêm ngặt ===. Nghĩa là các giá trị phải cùng kiểu dữ liệu.
// Ví dụ:
// let x = 3;
// switch (x) {
//   case "3":
//     console.log("string");
//     break;
//   case 3:
//     console.log("number");
//     break;
//   default:
//     console.log("unknown");
//     break;
// }
// number


// Bài 2
// Sử dụng lệnh switch case viết đoạn code tương ứng với đoạn code sau:
// let x = 2;
// if (x === 1) {
//   console.log("x KHÔNG LÀ số nguyên tố");
// } else if (x === 2) {
//   console.log("x LÀ số nguyên tố");
// } else if (x === 3) {
//   console.log("x LÀ số nguyên tố");
// } else if (x === 4) {
//   console.log("x KHÔNG LÀ số nguyên tố");
// } else if (x === 5) {
//   console.log("x LÀ số nguyên tố");
// } else if (x === 6) {
//   console.log("x KHÔNG LÀ số nguyên tố");
// } else {
//   console.log("CHƯA RÕ!");
// }
// Xem đáp án
// Bạn thấy rằng, có một vài trường hợp xử lý giống nhau. Nên mình có thể nhóm các case lại như sau:
// let x = 2;
// switch (x) {
//   case 2:
//   case 3:
//   case 5:
//     console.log("x LÀ số nguyên tố");
//     break;
//   case 1:
//   case 4:
//   case 6:
//     console.log("x KHÔNG LÀ số nguyên tố");
//     break;
//   default:
//     console.log("CHƯA RÕ!");
// }

// Biến cục bộ trong hàm
// Một biến được khai báo bên trong hàm, chỉ sử dụng được bên trong thân hàm đó. Biến này gọi là biến cục bộ (hay biến địa phương).
// Ví dụ về biến cục bộ trong JavaScript:
// function sayHello() {
//   const message = "Hello from kungfutech.edu.vn";
//   console.log(message);
// }
// sayHello(); // Hello from kungfutech.edu.vn
// console.log(message); // Uncaught ReferenceError: message is not defined
// Trong ví dụ trên, biến message là biến cục bộ bên trong hàm sayHello. Tức là biến message chỉ dùng được ở trong thân hàm sayHello.
// Khi bạn cố gắng truy cập vào biến message ở ngoài hàm, bạn sẽ bị lỗi Uncaught ReferenceError: message is not defined.


// Tuy nhiên, nếu bên trong thân hàm khai báo một biến trùng tên với biến ngoài hàm thì biến ngoài hàm "bị bỏ qua":

// let message = "Hello from kungfutech.edu.vn";
// function sayHello() {
//    message = "Hi!";
//   console.log(message);
// }
// sayHello(); // Hi!
// console.log(message); // Hello from kungfutech.edu.vn

// Truyền tham số vào hàm
// Trong trường hợp bạn muốn sử dụng giá trị của biến bên ngoài vào trong thân hàm, bạn có thể truyền tham số vào hàm (thay vì sử dụng biến toàn cục).
// Ví dụ truyền tham số vào hàm:
// function sayHello(message) {
//   console.log(message);
// }
// sayHello("Hello!"); // Hello!
// sayHello("Hi!"); // Hi!
// Khi hàm sayHello được gọi, giá trị string được sao chép (copy) vào biến cục bộ message. Trong thân hàm sẽ sử dụng biến cục bộ đó.

// 📝 Số lượng tham số của hàm là không giới hạn.
// Ví dụ hàm có nhiều tham số:
// function sayHello(message, site) {
//   console.log(message + " from " + site);
// }
// sayHello("Hello", "kungfutech.edu.vn"); // Hello from kungfutech.edu.vn


// Giá trị tham số mặc định
// Đối với hàm có tham số mà khi gọi hàm, bạn không truyền giá trị vào thì giá trị của tham số đó là undefined, ví dụ:
// function sayHello(message, site) {
//   console.log(message + " from " + site);
// }
// sayHello("Hello"); // Hello from undefined
// Trong trường hợp này, bạn có thể định nghĩa "giá trị mặc định" cho tham số bằng cách sử dụng toán tử gán = như sau:
// function sayHello(message, site = "kungfutech.edu.vn") {
//   console.log(message + " from " + site);
// }
// sayHello("Hello"); // Hello from kungfutech.edu.vn
// Lúc này, nếu bạn không truyền giá trị vào tham số site thì giá trị của nó mặc định là kungfutech.edu.vn.
// Trong ví dụ trên, giá trị mặc định chỉ là một giá trị string. Tuy nhiên, giá trị mặc định có thể là một biểu thức hoặc thậm chí là một hàm khác, ví dụ:
// function aFunction() {
//   // code
// }
// function sayHello(message, site = aFunction()) {
//   console.log(message + " from " + site);
// }
// Trong ví trên, hàm aFunction() chỉ được gọi khi bạn không truyền giá trị cho tham số site.

// Bạn cũng thấy rằng, hai vị trí return đầu tiên không có giá trị nào theo sau. Khi đó, giá trị trả về mặc định là undefined:
// function sum(a, b) {
//   return;
// }
// let r = sum(1, 2);
// console.log(r); // undefined
// Ngoài ra, nếu hàm không có return thì giá trị trả về cũng là undefined:
// function sum(a, b) {}
// let r = sum(1, 2);
// console.log(r); // undefined
// không được xuống dòng ngay sau return. Vì JavaScript sẽ hiểu là bạn không return giá trị nào cả.
// Ví dụ:
// function sum(a, b) {
//   return;
//   a + b;
// }
// const result = sum(1, 2);
// console.log(result); // undefined
// Trình thông dịch JavaScript sẽ tự động thêm dấu ; ngay sau return. Do đó, giá trị trả về của hàm trên là undefined. Và thành phần a + b phía dưới sẽ không bao giờ được chạy tới.
// Nếu cần xuống dòng thì bạn phải đưa giá trị trả về vào trong cặp dấu ngoặc đơn () như sau:
// function sum(a, b) {
//   return a + b;
// }
// const result = sum(1, 2);
// console.log(result); // 3

// Sự phát sinh hàm trong chương trình
// Khi lập trình, thông thường sẽ có hai trường hợp mà bạn nên viết hàm:
// Một đoạn chương trình được lặp đi, lặp lại nhiều lần. Việc gom chúng lại thành một hàm sẽ giúp chương trình ngắn gọn hơn, dễ hiểu hơn. Và khi cần thay đổi, bạn chỉ cần sửa một lần trong nội dung hàm, thay vì phải sửa nhiều chỗ.
// Bạn cần tách toàn bộ chương trình thành những phần nhỏ hơn. Hay còn gọi là module hoá. Lúc này, bạn có thể xây dựng logic cho toàn bộ chương trình trước khi thật sự định nghĩa nội dung từng hàm. Cách tiếp cận này gọi là "top-down".
// Với những dự án lớn, mỗi thành viên thường chỉ được làm những module nhỏ trong toàn bộ một project lớn.
// Sau đó khi các module nhỏ hoàn thành, sẽ có người ghép những module nhỏ đó thành một chương trình hoàn chỉnh.
// Do đó, việc phân chia chương trình thành những hàm tốt là vô cùng quan trọng.
// Như thế nào là một hàm tốt?
// Đây là một câu hỏi rất khó để trả lời. Theo mình, hàm tốt là hàm thỏa mãn một số điều kiện sau:
// Một hàm chỉ thực hiện một chức năng duy nhất
// Độc lập với các yếu tố bên ngoài (biến toàn cục, môi trường thực thi,...)
// Dễ dàng tái sử dụng
// Tuy nhiên, không phải lúc nào bạn cũng có thể thoả mãn những yêu cầu trên. Hoặc không nhất thiết phải thoả mãn tất cả những yêu cầu trên.
// Pure function và non-pure function
// Nhìn chung, có hai loại hàm trong JavaScript là pure function (hàm thuần khiết) và non-pure function (hàm không thuần khiết).
// Hàm thuần khiết là hàm không phụ thuộc vào yếu tố bên ngoài (biến toàn cục, môi trường thực thi,...). Bất cứ khi nào bạn gọi hàm thuần khiết với cùng một đối số thì kết quả trả về luôn giống nhau.
// Do đó, pure function rất dễ để sử dụng, tái sử dụng hay bảo trì,... Theo mình, hàm thuần khiết là một hàm tốt.
// Ví dụ hàm thuần khiết:
// function pureFunc(number, factor) {
//   return number * factor;
// }
// let ret = pureFunc(2, 10);
// console.log(ret); // 20
// Bạn thấy rằng, với cùng một giá trị truyền vào là 2 và 10 thì kết quả luôn là 20. Do đó, hàm trên là hàm thuần khiết.
// Ngược lại với hàm thuần khiết, hàm không thuần khiết là hàm phụ thuộc vào biến toàn cục hay môi trường thực thi.
// Vì vậy, khi bạn gọi cùng một hàm với cùng một đối số, nhưng kết quả lại có thể khác nhau.
// let factor = 10;
// function nonPureFunc(number) {
//   return number * factor;
// }
// let ret = nonPureFunc(2);
// console.log(ret); // 20
// factor = 11;
// ret = nonPureFunc(2);
// console.log(ret); // => 22
// Rõ ràng, hàm nonPureFunc không phải là hàm thuần khiết. Vì hàm này phụ thuộc vào biến ngoài hàm là factor.
// Nghĩa là khi giá trị của biến factor thay đổi, kết quả trả về của hàm cũng thay đổi (dù cho cùng giá trị truyền vào là 2).

// Tổng kết
// Vậy hàm là gì?
// Hàm trong JavaScript là một chương trình con giúp thực thi một công việc cụ thể với cú pháp là:
// function functionName([parameter1], [parameter2],...) {
//       statement1;
//       statement2;
//       ...
//     }
// Trong đó:
// Tham số truyền vào hàm được sao chép vào biến cục bộ bên trong hàm.
// Trường hợp không truyền giá trị vào thì giá trị của tham số là undefined. Bạn có thể sử dụng toán tử = để khai báo giá trị mặc định cho tham số trong hàm.
// Biến cục bộ khai báo bên trong hàm chỉ dùng được ở thân hàm. Code bên ngoài không thể truy cập vào biến cục bộ trong hàm.
// Hàm có thể đọc và cập nhật giá trị của biến ngoài hàm. Nhưng khi bên trong hàm có khai báo một biến cùng tên với biến ngoài hàm thì biến ngoài hàm bị "bỏ qua".
// Hàm có thể trả về giá trị bằng cách dùng từ khóa return. Có thể có nhiều từ khóa return trong thân hàm. Khi gặp từ khóa return, hàm sẽ dừng lại ngay lập tức và trả về giá trị sau return.
// Nếu không có giá trị, biểu thức,... nào sau return, hoặc không có từ khóa return thì giá trị trả về của hàm là undefined.
// Quy tắc đặt tên hàm cũng giống quy tắc đặt tên biến và hằng. Và tên hàm nên bắt đầu bằng một động từ.
// Nên ưu tiên viết hàm thuần khiết để dễ dàng tái sử dụng, dễ dàng kiểm thử và tránh lỗi.
// Thực hành
// Bài 1
// Viết hàm trả về giá trị nhỏ nhất của hai số (giả sử giá trị truyền nào luôn là số).
// Xem đáp án
// function min(a, b) {
//   return a < b ? a : b;
// }
// min(2, 5); // 2
// min(4, -1); // -1
// min(3, 3); // 3
// Trường hợp hai số truyền vào bằng nhau thì dĩ nhiên kết quả là giá trị của hai số đó.
// Bài 2
// Viết hàm kiểm tra xem một số có phải là số nguyên tố hay không. Nếu là số nguyên tố thì trả về true. Ngược lại, trả về false.
// Xem đáp án
// function isPrime(number) {
//   if (isNaN(number)) return false;
//   if (number < 2) return false;
//   if (number === 2) return true;
//   for (i = 2; i * i <= number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }
// // Ví dụ:
// isPrime("abc"); // false
// isPrime(0); // false
// isPrime(2); // true
// isPrime(5); // true
// isPrime(6); // false
// Trong đó, hàm isNaN(number) dùng để kiểm tra giá trị của biến number xem có phải là NaN hay không. Nói cách khác, nếu isNaN(number) trả về false thì giá trị của number là số.

// let sayHello = function () {
//   console.log("Hello from kungfutech.edu.vn");
// };
// console.log(sayHello);

// Hàm callback
// Vì bản chất hàm là một giá trị, nên bạn có thể truyền hàm vào một hàm khác.
// Ví dụ mình cần viết một hàm ask(question, handleYes, handleNo) với ba tham số:
// question: là một string, biểu thị câu hỏi.
// handleYes: là hàm được gọi nếu câu trả lời là yes.
// handleNo: là hàm được gọi nếu câu trả lời là no.
// Code triển khai hàm ask như sau:
// function ask(question, handleYes, handleNo) {
//   const answer = confirm(question);
//   if (answer) {
//     handleYes();
//   } else {
//     handleNo();
//   }
// }
// function handleYes() {
//   console.log("Bạn đã chọn Yes!");
// }
// function handleNo() {
//   console.log("Bạn đã chọn No!");
// }
// ask("Bạn muốn tiếp tục thực hiện chương trình không?", handleYes, handleNo);

// function ask(question, handleYes, handleNo) {
//   const answer = confirm(question);
//   if (answer) {
//     handleYes();
//   } else {
//     handleNo();
//   }
// }
// ask(
//   "Bạn muốn tiếp tục thực hiện chương trình không?",
//   function () {
//     console.log("Bạn đã chọn Yes!");
//   },
//   function () {
//     console.log("Bạn đã chọn No!");
//   }
// );

// ► Thời gian khởi tạo:
// Function declaration: hàm được xử lý sớm hơn vị trí mà hàm được định nghĩa. Nghĩa là bạn có thể gọi hàm trước khi định nghĩa hàm.
// sayHello(); // Hello!
// function sayHello() {
//   console.log("Hello!");
// }
// Function expression: hàm được tạo ra tại thời điểm chương trình thực thi xử lý tới đó. Nghĩa là bạn không thể gọi biểu thức hàm trước khi định nghĩa nó.
// Ví dụ sau bị lỗi cú pháp:
// sayHello(); // Uncaught ReferenceError: sayHello is not defined


// ► Phạm vi của function declaration và function expression:
// Khi sử dụng strict mode, function declaration có phạm vi trong block. Bạn có thể gọi hàm ở bất kỳ đâu trong block đó, nhưng không sử dụng được ở bên ngoài.
// Ví dụ sau bị lỗi cú pháp:
// "use strict";
// let isVietnamese = confirm("Bạn có phải người Việt Nam không?");
// if (isVietnamese) {
//   function welcome() {
//     console.log("Chào bạn!");
//   }
// } else {
//   function welcome() {
//     console.log("Hello!");
//   }
// }
// welcome(); // Uncaught ReferenceError: welcome is not defined
// Bởi vì hàm welcome được định nghĩa bên trong block của if nên chỉ dùng được bên trong block đó.
// Để sử dụng hàm welcome bên ngoài block, bạn có thể dùng function expression như sau:
// "use strict";
// let isVietnamese = confirm("Bạn có phải người Việt Nam không?");
// let welcome;
// if (isVietnamese) {
//   welcome = function () {
//     console.log("Chào bạn!");
//   };
// } else {
//   welcome = function () {
//     console.log("Hello!");
//   };
// }
// welcome(); // Không có lỗi
// Vòng lặp while
// Cú pháp của vòng lặp while là:
// while (condition) {
//   // code
// }
// Trong đó:
// Condition là điều kiện thực hiện vòng lặp.
// Khi condition có giá trị truthy thì code được thực thi. Ngược lại, khi condition là falsy thì vòng lặp kết thúc.
// Ví dụ vòng lặp while sau đây in ra các số từ 1 đến 3:
// let count = 1;
// while (count <= 3) {
//   console.log(count);
//   count++;
// }
// // 1
// // 2
// // 3
// Đoạn code trên diễn tả bằng lời như sau:
// Khởi tạo biến count bằng 1. Kiểm tra điều kiện nếu count <= 3 đúng thì ghi ra console.log số count. Sau đó, tăng count lên 1 đơn vị. Tiếp tục quá trình kiểm tra điều kiện, ghi log và tăng count cho đến khi count <= 3 sai thì dừng lại.
// Trong đoạn code trên, nếu bạn không có count++ thì giá trị của biến count mãi mãi là 1. Nói cách khác, giá trị của count <= 3 luôn luôn là true. Do đó, vòng lặp sẽ lặp vô hạn và không bao giờ dừng lại.
// thành phần condition có thể là biểu thức hoặc biến.
// Ví dụ đoạn code in ra các số từ 3 về 1:
// let n = 3;
// // Khi n === 0 thì n là falsy, suy ra vòng lặp kết thúc.
// while (n) {
//   console.log(n);
//   n--; // Giá trị của n giảm đi 1 đơn vị sau mỗi lượt lặp
// }
// // 3
// // 2
// // 1
// Nếu đoạn code bên trong vòng lặp chỉ là một câu lệnh thì bạn có thể bỏ qua cặp dấu {}.
// Ví dụ vòng lặp while chỉ có một câu lệnh ở thân vòng lặp:
// let n = 3;
// while (n) console.log(n--);
// // 3
// // 2
// // 1
// Vòng lặp do...while
// Vòng lặp do...while tương tự như vòng lặp while, chỉ khác là điều kiện vòng lặp được chuyển xuống cuối cấu trúc lặp.
// Cú pháp vòng lặp do...while như sau:
// do {
//   // code
// } while (condition);
// Khác với vòng lặp while, vòng lặp do...while luôn thực hiện ít nhất một lượt lặp. Sau đó mới kiểm tra điều kiện lặp.
// Nếu condition có giá trị truthy thì tiếp tục cấu trúc lặp. Ngược lại, khi condition là falsy thì vòng lặp do...while kết thúc.
// Ví dụ vòng lặp do...while in ra các số từ 1 đến 3:
// let count = 1;
// do {
//   console.log(count);
//   count++;
// } while (count <= 3);
// // 1
// // 2
// // 3
// Vòng lặp for
// Nếu để ý các ví dụ ở trên thì bạn sẽ thấy rằng, cấu trúc lặp với các loại vòng lặp như sau:
// Khởi tạo giá trị biến đếm (count = 1).
// So sánh giá trị đếm với giá trị tối đa (count <= 3).
// Tăng giá trị đếm (count++).
// Để ngắn gọn, JavaScript sinh ra vòng lặp for với cú pháp là:
// for([khởi tạo]; [điều kiện]; [cập nhật]){
//       // code
//     }
// Trong đó:
// [Khởi tạo]: Thực hiện một lần lúc bắt đầu vòng lặp.
// [Điều kiện]: Kiểm tra trước mỗi vòng lặp.
// [Cập nhật]: Thực hiện ở cuối mỗi vòng lặp.
// Ví dụ vòng lặp for dùng để in ra các số từ 1 đến 3:
// for (let count = 1; count <= 3; count++) {
//   console.log(count);
// }
// // 1
// // 2
// // 3
// Bạn có thể thấy là cấu trúc lặp vẫn được duy trì mà nhìn code gọn gàng hơn nhiều.
// Biến count được khai báo bên trong vòng lặp for như trên thì phạm vi của biến chỉ là bên trong vòng lặp for. Do đó, bạn không thể sử dụng biến count trên ở bên ngoài vòng lặp for.
// Ví dụ sau bị lỗi Uncaught ReferenceError: count is not defined khi cố gắng truy cập vào biến count:
// for (let count = 1; count <= 3; count++) {
//   console.log(count);
// }
// console.log(count); // Uncaught ReferenceError: count is not defined
// Để sử dụng được biến count, bạn cần khai báo biến count ở ngoài vòng lặp for:
// let count;
// for (count = 1; count <= 3; count++) {
//   console.log(count);
// }
// console.log(count); // 4
// Chú ý: bất kể phần nào trong vòng lặp for đều không bắt buộc.
// Ví dụ bỏ qua phần khởi tạo:
// let count = 1;
// for (; count <= 3; count++) {
//   console.log(count);
// }
// // 1
// // 2
// // 3
// Ví dụ bỏ qua phần cập nhật:
// let count = 1;
// for (; count <= 3; ) {
//   console.log(count++);
// }
// // 1
// // 2
// // 3
// Ví dụ bỏ qua phần điều kiện (trường hợp này sẽ lặp vô hạn):
// let count = 1;
// for (;;) {
//   console.log(count++);
// }


// let done = false;
// for (let i = 0; i < 3; i++) {
//   if (done) {
//     break;
//   }
//   for (let j = 0; j < 3; j++) {
//     if (i * j >= 4) {
//       done = true;
//       break;
//     }
//     console.log(i, j);
//   }
// }

// let size; // Nhập số dươngwhile (true) {  size = Number(prompt("Enter a positive number:"));  if (!isNaN(size) && size > 0) break;}
// // In ra màn hình
// for (let row = 0; row < size; row++) {
//   let str = "";
//   for (let col = 0; col < size; col++) {
//     if (row % 2 === col % 2) {
//       str += "#";
//     } else {
//       str += "_";
//     }
//   }
//   console.log(str);
// }
// let myComputer = {
//   type: "laptop",
//   brand: "Sony",
//   os: "Windows 7",
//   graphicCard: "NVIDIA",
// };
// console.log(myComputer);
// Để thay đổi giá trị thuộc tính của object, bạn chỉ cần sử dụng cách truy cập ở trên và gán giá trị mới cho thuộc tính đó.
// let myComputer = {
//   type: "laptop",
//   brand: "Sony",
//   "operating system": "Windows 7",
//   "graphic card": "NVIDIA",
// };
// myComputer.type = "desktop";
// myComputer["operating system"] = "Ubuntu";
// console.log(myComputer.type); // => desktop
// console.log(myComputer["operating system"]); // => Ubuntu
// Bạn cũng có thể thêm thuộc tính cho object như sau:
// let myComputer = {
//   type: "laptop",
//   brand: "Sony",
//   "operating system": "Windows 7",
//   "graphic card": "NVIDIA",
// };
// myComputer.status = "sleep";
// myComputer["it is good"] = true;
// console.log(myComputer.status); // sleep
// console.log(myComputer["it is good"]); // => true

// Để xóa một thuộc tính của object trong JavaScript, bạn sử dụng toán tử delete:
// let myComputer = {
//   type: "laptop",
//   brand: "Sony",
//   "operating system": "Windows 7",
//   "graphic card": "NVIDIA",
// };
// delete myComputer.brand;
// delete myComputer["graphic card"];
// console.log(myComputer.brand); // undefined
// console.log(myComputer["graphic card"]); // undefine

// let myComputer = {
//   type: "laptop",
//   brand: "Sony",
//   os: "Windows 7",
//   graphicCard: "NVIDIA"
// };
// let myComputer = {
//   type: "laptop",
//   brand: "Sony",
//   os: "Windows 7",
//   graphicCard: "NVIDIA",
// };
// console.log(myComputer);
// console.log(myComputer.type);
// console.log(myComputer["brand"]);

// let myComputer = {
//   _type: "laptop",
//   $brand: "Sony",
//   "operating system": "Windows 7",
//   "graphic card": "NVIDIA",
// };
// console.log(myComputer.$brand);
// console.log(myComputer._type);
// console.log(myComputer["operating system"]);
// // console.log(myComouter.operating system);   ERROR -> lỗi cú pháp

// myComputer._type = "desktop";
// myComputer["operating system"] = "Ubuntu";

// console.log(myComputer._type);
// console.log(myComputer["operating system"]);

// myComputer.status = "sleep";
// myComputer["it is good"] = true;
// console.log(myComputer.status);
// console.log(myComputer["it is good"]);
// console.log(myComputer);
// delete myComputer.$brand;
// delete myComputer["graphic card"];
// console.log(myComputer.$brand);
// console.log(myComputer["graphic card"]);

// let operatingSystem = "operating system";
// console.log(myComputer[operatingSystem]);

// let t = "type";
// const operatingSystem = "operating system";

// let myComputer = {
//   [t]: "laptop",
//   brand: "Sony",
//   [operatingSystem]: "Windows 7",
//   ["graphic" + " " + "card"]: "NVIDIA",
// };

// console.log(myComputer.type);
// console.log(myComputer["operating system"]);
// console.log(myComputer["graphic card"]);

// function makeComputer(type, brand, os, graphicCard){
//   return {
//     type,
//     brand,
//     os,
//     graphicCard,
//   };
// }
// let myComputer = makeComputer("laptop", "Sony", "Windows 7", "NVIDIA");
// console.log(myComputer.type);
// console.log(myComputer.brand);
// console.log(myComputer.os);
// console.log(myComputer.graphicCard);

// Giới hạn về tên thuộc tính của object trong JS
// Như bạn đã biết, bạn không được phép sử dụng từ khóa và từ dữ trữ để đặt tên biến trong JavaScript, ví dụ như: var, const, let, for, while,...
// Nhưng với thuộc tính trong object khác, bạn không bị giới hạn này:

// let obj = {
//   var: 1,
//   let: "a",
//   for: null,
//   while: NaN,
//   0: "zero",
// };
// console.log(obj.var);
// console.log(obj.let);
// console.log(obj.for);
// console.log(obj.while);
// console.log(obj[0]);
// console.log(obj["0"]);
// Cả hai trường hợp trên đều cho kết quả là undefined. Nhưng rõ ràng là thuộc tính name có tồn tại trong object, còn thuộc tính age thì không tồn tại.
// Để giải quyết vấn đề này, bạn có thể dùng toán tử in với cú pháp là:
// "key" in object;
// Ví dụ sử dụng in:

// let user = {
//   name: undefined,
// };
// console.log("name" in user);
// console.log("age" in user);

// let myComputer = {
//   type: "laptop",
//   brand: "Sony",
//   "operating system": "Windows 7",
//   "graphic card": "NVIDIA",
// };
// for (let prop in myComputer){
//   console.log(prop, ":", myComputer[prop]);
// }

// let numbers = {
//   "-21": "minus two",
//   "-1": "minus one",
//   0: "zero",
//   10: "ten",
//   2: "two",
//   a: "abc",
//   "-3": "minus three",
//   4: "four",
//   3: "three",
//   6: "six",
// };
// for (let n in numbers) {
//   console.log(n);
// }
// // 0
// // 2
// // 3
// // 4
// // 6
// // 10
// // -21
// // -1
// // a
// // -3
// Trong ví dụ trên, các thuộc tính với số không dấu được đưa lên đầu và sắp xếp theo tứ tự từ số nhỏ đến số lớn. Các thuộc tính còn lại được xếp sau và giống với thứ tự thêm vào object.

// let point = {};
// point.x = 2 ;
// point.y = 3;
// point["z-index"] = 1000;
// let sum = 0;
// for (let key in point){
//   sum += point[key];
// }
// console.log(sum);

// point.x = 1;
// delete point.y;
// console.log(point);

// Copy object sử dụng vòng lặp for...in
// Cách đơn giản nhất để copy object trong JavaScript là sử dụng vòng lặp for...in để duyệt tất cả các thuộc tính của object. Rồi lấy giá trị ứng với từng thuộc tính để gán cho object mới.
// Ví dụ copy object bằng for...in:
// let p1 = { x: 1, y: 2 };
// let p2 = {};
// for (let key in p1) {
//   p2[key] = p1[key];
// }
// console.log(p2.x); // 1
// console.log(p2.y); // 2
// p2.x = 5;
// console.log(p2.x); // 5
// console.log(p1.x); // 1
// Bạn thấy rằng, giá trị các thuộc tính x và y của p2 hoàn toàn giống p1. Nhưng khi thay đổi giá trị p2.x = 5 thì giá trị p1.x vẫn không thay đổi.
// Ngoài cách sử dụng vòng lặp for...in như trên, bạn có thể dùng hàm tương tự là Object.assign() với cú pháp:
// Object.assign(dest, [src1, src2, src3...]);
// Trong đó:
// dest: là object đích.
// [src1, src2, src3...]: là các object nguồn.
// Phương thức trên sẽ copy toàn bộ các thuộc tính của các object nguồn src1, src2,...,srcN vào object đích dest. Và giá trị trả về chính là object đích dest.
// Ví dụ sử dụng Object.assign:
// let user = { name: "Alex" };
// let permission1 = { canView: true };
// let permission2 = { canEdit: false };
// // copy toàn bộ thuộc tính từ permission1 và permission2 vào user
// Object.assign(user, permission1, permission2);
// // user trở thành { name: "Alex", canView: true, canEdit: false }
// for (let key in user) {
//   console.log(key, ":", user[key]);
// }
// // name : Alex
// // canView: true
// // canEdit: false


// Nếu tên thuộc tính giống nhau thì kết quả là giá trị của object cuối cùng:
// let user = { name: "Alex" };
// let permission1 = { canView: true };
// let permission2 = { canView: false, canEdit: false };
// // copy toàn bộ thuộc tính từ permission1 và permission2 vào user
// Object.assign(user, permission1, permission2);
// // user trở thành { name: "Alex", canView: false, canEdit: false }
// for (let key in user) {
//   console.log(key, ":", user[key]);
// }
// // name : Alex
// // canView: false
// // canEdit: false

// Phương thức của Object
// Trong JavaScript, hành động của object được biểu diễn bởi hàm. Ví dụ đối tượng user với hành động sayHello() như sau:
// let user = {
//   name: "Alex",
//   age: "28",
// };
// user.sayHello = function () {
//   console.log("Hello!");
// };
// user.sayHello(); // Hello!
// Trong ví dụ trên, mình sử dụng function expression để tạo một hàm, rồi gán hàm đó cho thuộc tính sayHello của user.
// Tiếp theo, mình gọi user.sayHello(). Và kết quả là Hello! được hiển thị ra console.
// 📝 Một hàm là thuộc tính của object thì nó được gọi là phương thức.
// Vì vậy, sayHello chính là một phương thức của object user.
// Ngoài cách sử dụng function expression như trên, bạn có thể dùng function declaration để khai báo hàm như sau:
// let user = {
//   name: "Alex",
//   age: "28",
// };
// function sayHello() {
//   console.log("Hello!");
// }
// user.sayHello = sayHello;
// user.sayHello(); // Hello!
// 💡 Cách sử dụng object để biểu diễn đối tượng với các thuộc tính và hành động như trên gọi là lập trình hướng đối tượng hay OOP.

// Cú pháp ngắn gọn khai báo phương thức
// Trong các ví dụ trên, mình khởi tạo object xong rồi mới định nghĩa thêm phương thức. Bạn cũng có thể định nghĩa phương thức từ khi khởi tạo object.
// Ví dụ khởi tạo object với phương thức:
// let user = {
//   name: "Alex",
//   age: "28",
//   sayHello: function () {
//     console.log("Hello!");
//   },
// };
// user.sayHello(); // Hello!
// Ngoài ra, bạn cũng có thể bỏ qua từ khóa function như sau:
// let user = {
//   name: "Alex",
//   age: "28",
//   sayHello() {
//     console.log("Hello!");
//   },
// };
// user.sayHello(); // Hello!
// Trên đây là một số kiến thức cơ bản về phương thức của object. Sau đây, mình tiếp tục tìm hiểu về từ khóa this trong JavaScript.

// let user = {
//   name: "Alex",
//   age: "28",
//   sayHello() {
//     console.log("Hello");
//   },
// };
// user.sayHello();

// Từ khóa this trong JavaScript
// Một trường hợp khá phổ biến đối với object là việc truy cập vào thuộc tính của object ngay bên trong phương thức.
// Ví dụ phương thức sayHello trên muốn truy cập và hiển thị giá trị của thuộc tính name. Để làm được điều này, bạn có thể sử dụng từ khóa this.
// Giá trị của this trong JavaScript chính là object gọi phương thức - đối tượng trước dấu chấm (.), ví dụ:
// let user = {
//   name: "Alex",
//   age: "28",
//   sayHello(){
//     console.log(this.name + " says Hello!");
//   },
// };
// user.sayHello();

// Kết quả vẫn đúng. Nhưng liệu vấn đề gì có thể xảy ra?
// Giả sử, bạn muốn copy object dạng tham chiếu từ user sang admin rồi ghi đè giá trị của user:
// let user = {
//   name: "Alex",
//   age: "28",
//   sayHello() {
//     console.log(this.name + " says Hello!");
//   },
// };
// let admin = user;
// user = null;
// admin.sayHello(); // Uncaught TypeError: Cannot read properties of null (reading 'name')
// Câu lệnh cuối cùng bị lỗi.
// Vì khi bạn gọi admin.sayHello(), bên trong phương thức sayHello đang gọi user.name. Mà giá trị user đã bị gán bằng null.
// Kết quả, bạn bị lỗi Uncaught TypeError: Cannot read properties of null (reading 'name').
// Nếu bạn dùng this.name thì sẽ không bị lỗi trên. Vì this lúc này được hiểu là admin.

// function sayHello() {
//   console.log(this.name);
// }

// This trong JavaScript không được "bind"
// Khác với các ngôn ngữ lập trình khác, từ khóa this có thể dùng ở bất kỳ hàm nào (không chỉ là phương thức của object),.
// Ví dụ sau đây không bị lỗi cú pháp:
// function sayHello() {
//   console.log(this.name);
// }
// Giá trị của this được xác định trong thời gian chạy, phụ thuộc vào đối tượng gọi hàm, ví dụ:
// let user1 = { name: "Alex" };
// let user2 = { name: "John" };
// function sayHello() {
//   console.log(this.name);
// }
// Sử dụng cùng 1 hàm cho 2 objects
// user1.sayHi = sayHello;
// user2.sayHi = sayHello;
// user1.sayHi(); // Alex (this tương ứng với user1)
// user2.sayHi(); // John (this tương ứng với user2)
// Bạn thấy rằng, tùy thuộc vào đối tượng gọi hàm là user1 hay user2 mà giá trị của this được xác định tương ứng.

// Điều này giải thích lý do tại sao this trong JavaScript không được "bind".
// Nếu hàm sayHello trên được gọi trực tiếp không qua object nào thì sao?

// Ví dụ gọi trực tiếp sayHello():
// "use strict";
// function sayHello() {
//   console.log(this);
// }
// sayHello(); // undefined
// Trong trường hợp này, giá trị của this là undefined ở strict mode. Nếu bạn truy cập this.name thì sẽ bị lỗi Uncaught TypeError: Cannot read properties of undefined (reading 'name').
// "use strict";
// function sayHello() {
//   console.log(this.name);
// }
// sayHello();
// // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
// Nếu không sử dụng strict mode thì giá trị của this sẽ là đối tượng global (đối tượng window trên trình duyệt).
// Khi đó, this.name tương đương với window.name (thường là undefined).

// let calculator = {
//   read() {
//     this.a = +prompt("Nhap vao so a:", 0);
//     this.b = +prompt("Nhap vao gia tri b:", 0);

//   },
//   add(){
//     return  this.a + this.b;
//   },
//   mul(){
//     return this.a * this.b;
//   },
// };
// calculator.read();
// console.log(calculator.add());
// console.log(calculator.mul());

// let calculator = {
//   // Phương thức read()
//   read() {
//     this.a = +prompt("Nhập vào số a:", 0);
//     this.b = +prompt("Nhập vào số b:", 0);
//   },
//   // Phương thức add()
//   add() {
//     return this.a + this.b;
//   },
//   // Phương thức mul()
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// console.log(calculator.add());
// console.log(calculator.mul());

// Bài 3
// Cho đoạn code sau:
// // Khởi tạo obj
// let obj = {
//   count: 0,
//   increase() {
//     this.count++;
//   },
//   decrease() {
//     this.count--;
//   },
//   showCount() {
//     console.log(this.count);
//   },
// };
// // Sử dụng obj
// obj.increase();
// obj.increase();
// obj.decrease();
// obj.showCount(); // 1
// Hãy sửa lại các phương thức của obj để có thể gọi code theo kiểu:
// obj.increase().increase().decrease().showCount(); // 1
// Xem đáp án
// Kĩ thuật này gọi là Method chaining.
// Ý tưởng là: trong mỗi phương thức, bạn sẽ return về this (đối tượng hiện tại).
// // Khởi tạo obj
// let obj = {
//   count: 0,
//   increase() {
//     this.count++;
//     return this;
//   },
//   decrease() {
//     this.count--;
//     return this;
//   },
//   showCount() {
//     console.log(this.count);
//     return this;
//   },
// };
// // Sử dụng obj
// obj.increase().increase().decrease().showCount(); // 1
// Bạn có thể khai báo, đồng thời khởi tạo object ngay với cú pháp new function(){...} như sau:
// let root = new (function () {
//   this.x = 1;
//   this.y = 2;
//   /*
//    * Code xử lý khác tại đây
//    */
// })();
// console.log(root.x, root.y); // 1 2

// Trả về giá trị từ hàm khởi tạo
// Thông thường, hàm khởi tạo không có từ khóa return vì JavaScript Engine ngầm định sẽ trả về this. Tuy nhiên, bạn có thể sử dụng return trong hàm khởi tạo với quy tắc như sau:
// Nếu return được gọi với object thì giá trị trả về của hàm khởi tạo là object chứ không phải this.
// Nếu return được gọi với giá trị nguyên thủy, return sẽ bị bỏ qua.
// Nói cách khác, return với một object sẽ trả về object đó, ngược lại thì trả về this.
// Ví dụ hàm khởi tạo trả về một object khác this:
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
//   return { x: 100, y: 100 }; // trả về object này thay vì this}
// }
// let p = new Point(0, 0);
// console.log(p.x, p.y); // 100 100
// Ví dụ hàm khởi tạo trả về giá trị nguyên thủy:
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
//   return 1; // return trả về giá trị nguyên thủy bị bỏ qua}
// }
// let p = new Point(0, 0);
// console.log(p.x, p.y); 

// let myArray = [
//   'Javascript',
//   'PHP',
//   'Java',
//   'Dart',
//   'Ruby',
//   'Python'
// ];

// let arrayLength = myArray.length;

// for (let i = 0; i< arrayLength; i++){
//   console.log(myArray[i]);
// }
// let myInfo = {
//   name: 'trung kien',
//   age: 25,
//   address: 'Ha Noi, VN'
// };
// for (let key in myInfo){
//   // console.log(key);
//   console.log(myInfo[key]);

// }
 
// let language = [
//   'javascript',
//   'PHP',
//   'Java'
// ];
// for (let key in language){
//   // console.log(key);
//   console.log(language[key]);
// }
// let myString = 'javascript';
// console.log(myString[2]); 
// let language = 'javascript';
// for(let key in language){
//   console.log(language[key]); 
// }

// for (var i =0; i < 10; i++){
//   if (i%2 !==0){
//     continue;
//   }
//   console.log(i);
// }

// let myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
//  for (let i = 0; i < myArray.length; i++) { 
//       for (let j = 0;j < myArray[i].length; j++){
//   console.log(myArray[i][j]); 
//   }
//  }
let courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 250
  },
  {
    id: 2,
    name: 'HTML CSS',
    coin: 250
  },
  {
    id: 3,
    name: 'Ruby',
    coin: 250
  },
  {
    id: 4,
    name: 'PHP',
    coin: 0
  },
  {
    id: 5,
    name: 'ReactJS',
    coin: 0
  }

];
function courseHandler(course, index){
  // console.log(course);
  return {
    id: course.id,
    name: `khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia: ${course.coin}`,
    index: index,
    originArray: courses,
  };
}
let newCourses = courses.map(courseHandler);
console.log(newCourses);
// courses.forEach(function(course,index){
//   console.log(index,course);
// });
// let isFree = courses.every(function(course,index){
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(isFree);

// let isFree1 = courses.some(function(course,index){
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(isFree1);

// let course = courses.find(function(course,index){
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(course);
// let course = courses.filter(function(course,index){
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(course);