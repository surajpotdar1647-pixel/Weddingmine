import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { wedding } from '@/wedding.config';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  // Detect Android device
  const isAndroid = /Android/i.test(navigator.userAgent);

  useEffect(() => {
    const tryPlay = async () => {
      try {
        audioRef.current!.muted = true;
        audioRef.current!.volume = wedding.music.volume;
        await audioRef.current!.play();
        console.log('Muted autoplay started');
      } catch (err) {
        console.log('Autoplay blocked until user interacts:', err);
      }
    };

    tryPlay();

    // For Android: show popup instead of auto unmute
    if (isAndroid) {
      setShowPopup(true);
      return;
    }

    // For iOS & Desktop: unmute on first interaction
    const allowSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        setIsMuted(false);
        window.removeEventListener('scroll', allowSound);
        window.removeEventListener('click', allowSound);
        window.removeEventListener('touchstart', allowSound);
      }
    };

    window.addEventListener('scroll', allowSound);
    window.addEventListener('click', allowSound);
    window.addEventListener('touchstart', allowSound);

    return () => {
      window.removeEventListener('scroll', allowSound);
      window.removeEventListener('click', allowSound);
      window.removeEventListener('touchstart', allowSound);
    };
  }, [isAndroid]);

  // When Android popup closes, play unmuted (real user gesture)
  const handlePopupClose = async () => {
    setShowPopup(false);
    if (audioRef.current) {
      try {
        audioRef.current.muted = false;
        setIsMuted(false);
        await audioRef.current.play();
        console.log('Audio playing after popup close (Android)');
      } catch (err) {
        console.log('Error playing after popup close:', err);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newState = !isMuted;
      audioRef.current.muted = newState;
      setIsMuted(newState);
    }
  };

  return (
    <>
      {/* Main Player */}
      <div className="fixed bottom-8 right-8 z-50">
        <audio
          ref={audioRef}
          src={wedding.music.file}
          loop
          preload="auto"
          playsInline
        />
        <Button
          ref={buttonRef}
          onClick={toggleMute}
          size="lg"
          aria-label={isMuted ? 'Play music' : 'Mute music'}
          className="h-14 w-14 rounded-full bg-gradient-to-br from-wedding-purple to-wedding-rose"
        >
          {isMuted ? (
            <VolumeX className="h-6 w-6" />
          ) : (
            <Volume2 className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Android-only welcome popup */}
      {showPopup && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm text-white text-center z-[9999] animate-fadeIn">
          <div className="bg-white/10 border border-white/30 rounded-2xl p-6 max-w-xs shadow-lg">
            <h2 className="text-xl font-semibold mb-3">
              {wedding.music.welcomeTitle}
            </h2>
            <p className="text-sm text-gray-200 mb-5">
              {wedding.music.welcomeMessage}
            </p>
            <Button
              onClick={handlePopupClose}
              className="w-full bg-gradient-to-r from-wedding-purple to-wedding-rose text-white font-semibold rounded-lg hover:scale-105 transition-all"
            >
              {wedding.music.welcomeButton}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
