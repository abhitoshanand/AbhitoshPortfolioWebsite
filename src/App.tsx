import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { VideoLectures } from './components/VideoLectures';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-dark transition-colors duration-300">
        <Navbar />
        <main>
          <Profile />
          <About />
          <Education />
          <Experience />
          <Projects />
          <VideoLectures />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}