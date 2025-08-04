import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function PrivacyPolicy() {
    const navigate = useNavigate();
    useEffect(() => {
        window.open("https://www.bonzicart.com/privacy_policy", "_blank");
        navigate('/dashboard');
        return () => {
            window.close();
        }

    }, []);

    return <div>Redirecting to Privacy Policy...</div>;
}

export default PrivacyPolicy;
