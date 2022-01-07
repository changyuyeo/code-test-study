//? 10. 문자 찾기
//* 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성

function solution(s, t) {
	let answer = 0
	for (let v of s) v === t && (answer += 1)

	return answer
}

let str = 'COMPUTERPROGRAMMING'
console.log(solution(str, 'R'))
console.log(solution(str, 'G'))
