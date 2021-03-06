import React from 'react'
import cardStyles from '../styles/Card.module.css'
import Link from 'next/link'

export interface CardProps  {
    title: string,
    description: string,
    href?: string
    link?: string
}

const Card: React.FC<CardProps> = ({title, description, href, link}) => {
    
    const renderCard = () => {
        if (link){
            return(
                <Link href={link} >
                    <a className={cardStyles.card}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </a>
                </Link>
            )
        } else if (href){
            return <a href={href} className={cardStyles.card}>
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
        }
        return <div className={cardStyles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    }
    
    
    
    return renderCard()
}


export default Card