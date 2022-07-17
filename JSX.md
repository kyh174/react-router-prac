#### JSX ####
```javascript
const element = <h1>Hello, world!</h1>;
```
- 마크업(html, css) 언어와 로직(javascript) 언어가 합쳐진 느낌

#### JSX에 표현식 포함 ####
```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
- JSX의 중괄호 {} 안에 유효한 JavsScript 표현식을 넣을 수 있다.
- ex) 2 + 2, user.firstName - (Object), formatName(user) - (Function)
```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

#### JSX도 표현식 ####
- 컴파일 후 JSX 표현식은 JavaScript 객체로 평가됨
- if, 반복, 변수 할당, 인수, 함수에서 반환 가능
```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}
```

#### JSX 속성 지정 ####
- 따옴표를 사용해 문자열을 속성으로 지정 가능
```javascript
const element = <a href="https://www.reactjs.org"> link </a>;
```
- 속성에 JavaScript 표현식 사용 위해 중괄호 사용 가능
```javascript
const element = <img src={user.avatarUrl}></img>;
```
- JSX는 JavaScript에 가깝기 때문에 속성이름 대신 카멜케이스 사용
```
class => className
tabindex => tabIndex
```

#### JSX 자식 지정하기 ####
- 태그가 비어 있으면 / 사용해 즉시 닫을 수 있음
```javascript
const element = <img src={user.avatarUrl} />;
```
- 하위 항목이 포함될 수 있음
```javascript
const element = (
  <div>
    <h1>Hello</h1>
    <h2>Good to see you here</h2>
  </div>
);
```

#### JSX는 주입 공격을 방지함 ####
- 애플리케이션에 명시적으로 작성되지 않은 내용은 절대 주입할 수 없다.
- ReactDOM은 렌더링하기 전에 JSX에 포함된 모든 값을 이스케이프 하기때문

#### JSX는 객체를 나타낸다. ####
- Babel은 JSX를 React.createElement()호출로 컴파일한다.
- 아래 두 예는 동일하다.
```javascript
const element = (
  <h1 className="greeting">
    Hello, world
  </h1>
);
```
```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world'
);
```
- React.createElement()는 몇 가지 검사를 수행하지만 기본적으로 아래와 같은 객체를 생성한다.
```javascript
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
```