import s from './Stack.module.css';
import Image from 'next/image';

const Stack = () => (
    <div>
        <div className={s.stack}>
            <div><Image alt="react" width={4} height={4} src='/stack/react.png' /></div>
            <div><Image alt="nextjs" width={4} height={4} src='/stack/nextjs.svg' /></div>
            <div><Image alt="Angular" width={4} height={4} src='/stack/angular.png' /></div>
            <div><Image alt="NodeJS" width={4} height={4} src='/stack/nodejs.png' /></div>
            <div><Image alt="Vuejs" width={4} height={4} src='/stack/vuejs.png' /></div>
            <div><Image alt="nestjs" width={4} height={4} src='/stack/nestjs.png' /></div>
            <div><Image alt="ReactiveX" width={4} height={4} src='/stack/rxlogo.png' /></div>
        </div>
    </div>
)

export default Stack;
