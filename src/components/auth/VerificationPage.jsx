import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerificationPage = () => {
    const { code } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                // Kirim permintaan ke endpoint verifikasi API
                const response = await axios.get(`https://heal-in-501fb50a416c.herokuapp.com/api/user/email/verify/${code}`);

                // Jika verifikasi berhasil, navigasikan pengguna ke halaman login
                if (response.status === 200) {
                    alert("Email berhasil diverifikasi. Silakan login untuk melanjutkan.");
                    navigate('/auth');
                } else {
                    console.error('Verification failed');
                    // Tindakan jika verifikasi gagal, misalnya menampilkan pesan kesalahan
                }
            } catch (error) {
                console.error('Error verifying user:', error);
                // Tindakan jika terjadi kesalahan saat verifikasi, misalnya menampilkan pesan kesalahan
            }
        };

        // Panggil fungsi verifikasi ketika komponen dimuat
        verifyUser();
    }, [code, navigate]); // Pastikan untuk menyertakan code dan navigate di dalam dependency array

    return (
        <div>
            {/* Tampilkan pesan atau komponen lain yang sesuai dengan kebutuhan Anda */}
            <h2>Verifying...</h2>
        </div>
    );
};

export default VerificationPage;
