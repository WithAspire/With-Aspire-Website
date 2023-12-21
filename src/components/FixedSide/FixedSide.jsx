import { BookMarked, Headphones } from "lucide-react";
import './FixedSide.css'

export default function FixedSide() {
    return (
        <>

            <div id="fixed-side">
                <div className="block">
                    <div className="icon">
                        <Headphones size={20} />
                    </div>
                    <div className="text">
                        Customer Care
                    </div>
                </div>
                <div className="block">
                    <div className="icon">
                        <BookMarked size={20} />
                    </div>
                    <div className="text">
                        Request for Demo
                    </div>
                </div>
            </div>

        </>
    )
}
