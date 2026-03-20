import { TwitterCard } from "./components/FollowCard/TwitterCard";
import style from './App.module.css'

export function App () {
    return(
        <div className={style.content}>
            <TwitterCard name="Random Guy" handle="random" />
            <TwitterCard name="Another Random Guy" handle="SecondRandom" />
            <TwitterCard name="Random cats" handle="ThisIsAHandle"/>
        </div>
    )
}