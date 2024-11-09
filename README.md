# APPTIVE Frontend Mission (State, Ref, Effect)

APPTIVE의 11월 2주차 프론트엔드 과제입니다.

## 개요

인성이는 테마 변경이 가능하고 커다란 시계를 보여주는 타이머를 만들고 싶어합니다.
타이머의 입력부와 컨트롤러는 구현하였으나, Ref와 State를 이용하여 타이머의 기능을 구현하는 것이 어려워 고민하고 있습니다.
인성이를 도와 타이머의 기능을 구현해주세요.

## 상세

### 문제 1

`pages/timer/index.tsx` 파일에는 타이머의 입력 (시간, 분, 초) 등을 입력할 수 있는 `Inputs` 컴포넌트와 
타이머의 시작, 일시정지, 중지를 수행할 수 있는 `Controls` 컴포넌트가 있다.
해당 컴포넌트에 정의된 `startTimer`, `pauseTimer`, `stopTimer` 함수를 구현하시오.
Ref, State 등의 Hooks를 자유롭게 사용할 수 있습니다. 단, 이미 선언된 `inputs` State는 수정하지 않는다.

### 문제 2

`components/tab/index.tsx` 파일에는 탭을 구성하는 `Tab` 컴포넌트와 이를 조정하는 `TabContainer` 컴포넌트가 있다.
`TabContainer` 컴포넌트의 `indicator`은 현재 선택된 탭을 표시하는 역할을 하는데, 이를 위해 선택된 `Tab` 컴포넌트의 `left`와 `width` 정보가 필요하다.
Ref와 State를 이용하여 `TabContainer` 컴포넌트의 `indicator`를 구현하시오.

## 수행 방법

1. 해당 저장소를 Clone 합니다.
```bash
git clone https://github.com/apptivedev/mission-frontend-state-hook.git
```

2. Clone한 저장소로 이동합니다.
```bash
cd mission-frontend-state-hook
```

3. 의존성을 설치합니다.
```bash
yarn
```

4. 개발 서버를 실행합니다.
```bash
yarn dev
```
