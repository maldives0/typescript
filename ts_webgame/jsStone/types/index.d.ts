export{}//external modules외부 모듈로 만들어주는 방법, global은 이미 다른 사람이 만들어두었기 때문에 ambient module로는 만들 수 없다.
declare global{
interface Window{
    hello:string;
}
}