import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

const Landinglayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>

            <Header />
            <Footer />
            {children}
        </div>
    )
}

export default Landinglayout