import React from 'react';


import wppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

interface TeacherItemProps {
    teacher: {
        avatar: string;
        bio: string;
        cost: number;
        id: number;
        name: string;
        subject: string;
        whatsapp: string;
    };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return ( 
        <article className="teacher-item">
            <header>
                <img 
                src={teacher.avatar} 
                alt={teacher.name}
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

                <p>
                {teacher.bio}
                </p>

            <footer>
                <p>
                Preço/hora
                <strong>R$ {teacher.cost}</strong>
                </p>

                <button type="button">
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;