import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <p>Quection No.1
                <button>
                    <Link to="/Counting ">
                        1 to 100 </Link>
                </button>
            </p>
            <p>Quection No.2
                <button>
                    <Link to="/TwoPower">
                        TwoPower
                    </Link>
                </button>
            </p>
            <p>Quection No.3
                <button>
                    <Link to="/EvenOdd">
                        EvenOdd
                    </Link>
                </button>
            </p>
            <p>Quection No.4
                <button>
                    <Link to="From">
                        From
                    </Link>
                </button>
            </p>
            <p>Quection No.5
                <button>
                    <Link to="Table">
                        Table
                    </Link>
                </button>
            </p>
            <p>Quection No.6
                <button>
                    <Link to="NameChange">
                        NameChange
                    </Link>
                </button>
            </p>
            <p>Quection No.7
                <button>
                    <Link to="GoDelhi">
                        GoDelhi
                    </Link>
                </button>
            </p>
            <p>Quection No.8
                <button>
                    <Link>
                    </Link>
                </button>
            </p>
            <p>Quection No.9
                <button>
                    <Link>
                    </Link>
                </button>
            </p>
            <p>Quection No.10
                <button>
                    <Link>
                    </Link>
                </button>
            </p>
        </div>
    )
}

export default HomePage