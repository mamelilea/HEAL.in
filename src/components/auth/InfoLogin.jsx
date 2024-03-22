import axios from 'axios';


const InfoLogin = async (token) => {
    try {
        const response = await axios.get('https://heal-in-501fb50a416c.herokuapp.com/api/user/login-user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        
        if (response.status === 200) {
            const userData = response.data.data;
            return userData;
        } else {
            console.error('Failed to get user data:', response.data.message);
            return null;
        }
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
    }
};

export default InfoLogin;

{/* <Route
                    path='/journaling'
                    element={
                        <PrivateRoute>
                            <JournalingPage />
                        </PrivateRoute>
                    } />
                <Route
                    path='/video&podcast'
                    element={
                        <PrivateRoute>
                            <VideoPodcast />
                        </PrivateRoute>
                    } />
                <Route
                    path='/breath'
                    element={
                        <PrivateRoute>
                            <Breath />
                        </PrivateRoute>
                    } />
                <Route
                    path='/article'
                    element={
                        <PrivateRoute>
                            <ArticlePage />
                        </PrivateRoute>
                    } />
                <Route
                    path='/article/:id'
                    element={
                        <PrivateRoute>
                            <ArticleDetail />
                        </PrivateRoute>
                    } />
                <Route
                    path='/event'
                    element={
                        <PrivateRoute>
                            <Event />
                        </PrivateRoute>
                    } />
                <Route
                    path='/event/:id'
                    element={
                        <PrivateRoute>
                            <EventDetails />
                        </PrivateRoute>
                    } /> */}
