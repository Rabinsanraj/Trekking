import { useState } from "react";
import {Container, Box, Card, CardContent, TextField, Button, InputAdornment,
    IconButton, MenuItem,} from "@mui/material";

export function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "",
        captchaInput: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [captcha, setCaptcha] = useState(generateCaptcha());

    function generateCaptcha() {
        return Math.random().toString(36).substring(2, 8);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password || !formData.role) {
            return alert("Fill all fields");
        }

        if (formData.captchaInput !== captcha) {
            alert("❌ Captcha does not match. Try again.");
            setCaptcha(generateCaptcha());
            setFormData((s) => ({ ...s, captchaInput: "" }));
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch("users.json");
            if (!res.ok) throw new Error("JSON file not found!");
            const users = await res.json();
            const user = users.find(
                (u) =>
                    u.username === formData.username &&
                    u.password === formData.password &&
                    u.role === formData.role
            );

            if (user) {
                alert(`✅ Login success: (${user.username}) ${user.role}`);
            } else {
                alert("❌ Invalid login");
            }
        } catch (err) {
            console.error(err);
            alert("Login failed -" + err.message);
        } finally {
            setSubmitting(false);
            setCaptcha(generateCaptcha());
        }
    };

    const isFormValid =
        formData.username && formData.password && formData.role && formData.captchaInput;

    return (
        <Container maxWidth="sm" sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
            <Card sx={{ width: "100%", p: 3, backgroundColor: "#ecececff" }}>
                <CardContent>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField label="Username" name="username" fullWidth margin="normal"
                            value={formData.username} onChange={handleChange} />
                        <TextField label="Password" name="password" type={showPassword ? "text" : "password"}
                            fullWidth margin="normal" value={formData.password} onChange={handleChange} InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword((s) => !s)} edge="end" size="large">
                                            {showPassword ? "🙈" : "👁️"}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField select label="Role" name="role" value={formData.role}
                            onChange={handleChange} fullWidth margin="normal">
                            <MenuItem value="admin">ADMIN</MenuItem>
                            <MenuItem value="stock_manager">STOCK MANAGER</MenuItem>
                            <MenuItem value="director">DIRECTOR</MenuItem>
                            <MenuItem value="secretary">SECRETARY</MenuItem>
                        </TextField>

                        <Box sx={{ mt: 2 }}>
                            <TextField fullWidth
                                margin="normal"value={captcha}InputProps={{readOnly: true, sx: {
                                        letterSpacing: 3, fontWeight: "bold", background: "#eee",
                                        borderRadius: "8px", width: "60%",},
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setCaptcha(generateCaptcha())} edge="end">
                                                ⟳
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        <TextField label="Enter Captcha" name="captchaInput" value={formData.captchaInput}
                            onChange={handleChange} fullWidth margin="normal" />
                        <Button type="submit" variant="contained" fullWidth color="warning" sx={{ mt: 2 }}
                            disabled={!isFormValid || submitting}>
                            {submitting ? "Logging in..." : "Login"}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
