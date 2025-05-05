$(document).ready(function() {
    // User storage
    const users = JSON.parse(localStorage.getItem('designer_users')) || [];
    
    // DOM Elements
    const $loginForm = $('#loginForm');
    const $registerForm = $('#registerForm');
    const $showRegister = $('#showRegister');
    const $showLogin = $('#showLogin');
    const $toast = $('#authToast');
    
    // Toggle password visibility
    $('.toggle-password').click(function() {
        const $input = $(this).siblings('input');
        const type = $input.attr('type') === 'password' ? 'text' : 'password';
        $input.attr('type', type);
        $(this).toggleClass('fa-eye fa-eye-slash');
    });
    
    // Switch between login/register forms
    $showRegister.click(function(e) {
        e.preventDefault();
        $loginForm.removeClass('active').hide();
        $registerForm.addClass('active').show();
    });
    
    $showLogin.click(function(e) {
        e.preventDefault();
        $registerForm.removeClass('active').hide();
        $loginForm.addClass('active').show();
    });
    
    // Show toast notification
    function showToast(type, message) {
        const iconMap = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        
        $('#toastIcon').removeClass().addClass(`fas ${iconMap[type]}`).css('color', `var(--${type}-color)`);
        $('#toastMessage').text(message);
        $toast.addClass('show');
        
        setTimeout(() => {
            $toast.removeClass('show');
        }, 5000);
    }
    
    // Handle login
    $loginForm.submit(function(e) {
        e.preventDefault();
        
        const email = $('#loginEmail').val().trim();
        const password = $('#loginPassword').val();
        
        if (!email || !password) {
            showToast('error', 'Please fill in all fields');
            return;
        }
        
        // Simulate API call
        setTimeout(() => {
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Remember me
                if ($('#rememberMe').is(':checked')) {
                    localStorage.setItem('designer_remembered', email);
                }
                
                // Save session
                sessionStorage.setItem('designer_user', JSON.stringify(user));
                
                // Redirect
                window.location.href = 'index.html';
            } else {
                showToast('error', 'Invalid email or password');
            }
        }, 800);
    });
    
    // Handle registration
    $registerForm.submit(function(e) {
        e.preventDefault();
        
        const name = $('#registerName').val().trim();
        const email = $('#registerEmail').val().trim();
        const password = $('#registerPassword').val();
        const confirmPassword = $('#registerConfirmPassword').val();
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            showToast('error', 'Please fill in all fields');
            return;
        }
        
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            showToast('error', 'Please enter a valid email');
            return;
        }
        
        if (password.length < 8) {
            showToast('error', 'Password must be at least 8 characters');
            return;
        }
        
        if (password !== confirmPassword) {
            showToast('error', 'Passwords do not match');
            return;
        }
        
        if (!document.getElementById('agreeTerms').checked) {
            showToast('error', 'You must agree to the terms');
            return;
        }
        
        // Check if email exists
        if (users.some(u => u.email === email)) {
            showToast('error', 'Email already registered');
            return;
        }
        
        // Create user
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
            createdAt: new Date().toISOString()
        };
        
        // Simulate API call
        setTimeout(() => {
            users.push(newUser);
            localStorage.setItem('designer_users', JSON.stringify(users));
            
            showToast('success', 'Account created successfully! Redirecting to login...');
            
            // Auto-fill login form and switch to login
            setTimeout(() => {
                $('#loginEmail').val(email);
                $registerForm.removeClass('active').hide();
                $loginForm.addClass('active').show();
                $('#loginPassword').focus();
            }, 1500);
        }, 800);
    });
    
    // Check for remembered email
    const rememberedEmail = localStorage.getItem('designer_remembered');
    if (rememberedEmail) {
        $('#loginEmail').val(rememberedEmail);
        $('#rememberMe').prop('checked', true);
    }
    
    // Check if already logged in
    if (sessionStorage.getItem('designer_user')) {
        window.location.href = 'index.html';
    }
});

