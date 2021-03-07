import React from 'react'
import Card, { CardProps } from './Card'
import gridStyles from '../styles/Grid.module.css'

interface GridProps {
    cards: CardProps[]
}

const Grid: React.FC<GridProps> = ({ cards }) => {
    
    const renderCards = (cards: CardProps[]) => {
        return cards.map(el => {
            if (el.link) {
                if (el.date) return <Card title={el.title} description={el.description} href={el.link} date={el.date} />
                return <Card title={el.title} description={el.description} href={el.link} />
            } 
            if (el.date) return <Card title={el.title} description={el.description} href={el.href} date={el.date} />
          return <Card title={el.title} description={el.description} href={el.href} />
        })
      }

    return (
        <div className={gridStyles.grid}>
            {renderCards(cards)}
        </div>
    )
}


export default Grid