const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/send-email`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                setMessage('Email sent successfully!');
                setFormData({ name: '', email: '', number: '', message: '' });
            } else {
                setMessage('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error sending email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='contact' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
            {/* Your existing code for image and form */}
            <div className="w-full">
                {message && <p className="text-red-500">{message}</p>}
                <button disabled={loading} className={`bg-limegreen ${loading ? 'opacity-50' : ''} px-6 py-4 w-full rounded-md font-semibold text-md font-ubuntu`}>
                    {loading ? 'Submitting...' : 'Submit Now'}
                </button>
            </div>
        </section>
    );
};
