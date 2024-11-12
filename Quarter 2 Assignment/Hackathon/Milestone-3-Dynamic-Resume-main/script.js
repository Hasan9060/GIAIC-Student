
        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = function() {
                document.getElementById('resumeProfileImage').src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        function generateResume() {
            const name = document.getElementById('name').value;
            const title = document.getElementById('title').value;
            const bio = document.getElementById('bio').value;
            const email = document.getElementById('email').value;
            const website = document.getElementById('website').value;
            const phone = document.getElementById('phone').value;
            const location = document.getElementById('location').value;
            const school = document.getElementById('school').value;
            const degree = document.getElementById('degree').value;
            const eduDate = document.getElementById('eduDate').value;
            const experience = document.getElementById('experience').value;
            const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
           
            const languages = document.getElementById('languages').value.split(',').map(language => language.trim());
            const github = document.getElementById('github').value;
            const linkedin = document.getElementById('linkedin').value;

            // Populate the preview section
            document.getElementById('previewName').innerText = name;
            document.getElementById('previewTitle').innerText = title;
            document.getElementById('previewBio').innerText = bio;

           document.getElementById('previewContact').innerHTML = `<b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br> <b>Website:</b> ${website}<br>  <b>Location:</b> ${location}`;

            document.getElementById('previewEducation').innerHTML = `<b>Degree:</b> ${degree}<br><b>School:</b> ${school}<br><b>Duration:</b> ${eduDate}`;

            document.getElementById('previewExperience').innerText = experience;

            // Display skills
            const skillsContainer = document.getElementById('previewSkills');
            skillsContainer.innerHTML = ''; // Clear previous skills
            skills.forEach(skill => {
                const skillTag = document.createElement('div');
                skillTag.className = 'skill-tag';
                skillTag.innerText = skill;
                skillsContainer.appendChild(skillTag);
            });

            // Display languages
            const languagesContainer = document.getElementById('previewLanguages');
            languagesContainer.innerHTML = ''; // Clear previous languages
            languages.forEach(language => {
                const languageTag = document.createElement('div');
                languageTag.className = 'language-tag';
                languageTag.innerText = language;
                languagesContainer.appendChild(languageTag);
            });

            // Set social links
            document.getElementById('previewGithub').href = github;
            document.getElementById('previewLinkedin').href = linkedin;

            // Show the resume preview and action buttons
            document.getElementById('resume').style.display = 'block';
            document.getElementById('action-buttons').style.display = 'flex';
            document.getElementById('formSection').style.display = 'none';

            document.getElementById('header-title').innerText = "Your Resume"
        }
