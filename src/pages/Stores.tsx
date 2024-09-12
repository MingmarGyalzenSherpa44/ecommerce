import StoreCard from "../molecules/StoreCard";
import { stores } from "../constants/stores";

export default function Stores() {
    return (
        <section className="stores-section">
            <header>
                <h1>Stores</h1>
                <p>Find one of our 11 stores nearest you.</p>
            </header>
            <main>
                {stores.map((store, index) => (
                    <StoreCard key={index} {...store} />
                ))}
            </main>
        </section>
    )
}

