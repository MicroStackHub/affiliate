// https://www.bonzicart.com/account/feedback

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function FeedBackPage() {
    const navigate = useNavigate();
    useEffect(() => {
        window.open("https://www.bonzicart.com/account/feedback", "_blank");
        navigate('/dashboard');
        return () => {
            window.close();
        }

    }, []);

    return <div>Redirecting to feedback...</div>;
}

export default FeedBackPage