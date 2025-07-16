import Image from "next/image";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { SkipBackIcon } from "lucide-react";
import { SkipForwardIcon } from "lucide-react";
import { VolumeX } from "lucide-react";
import { Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Repeat1 } from "lucide-react";
import { Repeat } from "lucide-react";

export default function Player({ className }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("0:00");
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [isLoop, setIsLoop] = useState(false);
  const tracks = [
    {
      id: 1,
      title: "Echo of Sadness",
      artist: "Turnique",
      src: "/music/B3ed 3anak.mp3",
      cover: "/covers/hope.png",
    },
    {
      id: 2,
      title: "Hope",
      artist: "Ishak",
      src: "/music/Another Love.mp3",
      cover: "/covers/slowlife.png",
    },
    {
      id: 1,
      title: "The Reason",
      artist: "Belfagih",
      src: "/music/Co2.mp3",
      cover: "/covers/echoofsadness.png",
    },
    {
      id: 1,
      title: "Winter is coming",
      artist: "Tirimi",
      src: "/music/Skylarking.mp3",
      cover: "/covers/dawnofchange.png",
    },
  ];
  const [currentTrackIndex, setCurrentTrackIndex] = useState(1);
  const currentTrack = tracks[currentTrackIndex];

  function playNext() {
    // if (shuffle) {
    //   const NextIndex = Math.floor(Math.random() *  tracks.length)
    //   setCurrentTrackIndex(NextIndex)
    // }
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1,
    );

    if (isPlaying) {
      setTimeout(() => audioRef.current.play(), 0);
    }
  }
  function playPrevious() {
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }

    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1,
    );

    if (isPlaying) {
      setTimeout(() => audioRef.current.play(), 0);
    }
  }

  function togglePlay() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);

      return () => {
        // Use the same audio reference from closure
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  function toggleMute() {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  }

  function toggleLoop() {
    setIsLoop(!isLoop);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function handleSeek(e) {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.nativeEvent.offsetX;
      const progressBarWidth = progressBar.clientWidth;
      const seekPercentage = (clickPosition / progressBarWidth) * 100;
      const seekTime = (audioRef.current.duration * seekPercentage) / 100;
      audioRef.current.currentTime = seekTime;
      setProgress(seekPercentage);
      setCurrentTime(formatTime(seekTime));
    }
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function updateProgress() {
      if (!audio) return;
      const { duration, currentTime } = audio;
      setDuration(formatTime(duration));
      setCurrentTime(formatTime(currentTime));
      setProgress((currentTime / duration) * 100);
    }

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", updateProgress);
      }
    };
  }, []);

  return (
    <div
      className={`text-white bg-white/10 backdrop-blur-xl rounded-xl flex flex-col items-center justify-evenly ${className}`}
    >
      <div className="w-full flex items-center pl-3">
        <Image
          src={currentTrack.cover}
          alt={currentTrack.title}
          height={68}
          width={68}
          className="rounded-full"
        />
        <div className="pl-3">
          <div>{currentTrack.title}</div>
          <div className="text-sm text-gray-300 italic">
            {currentTrack.artist}
          </div>
        </div>
      </div>
      <div
        className="bg-white/30 rounded h-2 w-[90%] cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-full rounded bg-gradient-to-l to-[#f0fe93] from-[#174e4f] transition-all duration-300 ease-linear min-w-2"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between w-[90%] h-fit items-center text-xs">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
      <div className="h-fit  flex items-center justify-evenly w-[80%] controls">
        <button onClick={toggleLoop}>
          {isLoop ? (
            <Repeat1 className="w-6 h-6" />
          ) : (
            <Repeat className="w-6 h-6" />
          )}
        </button>
        <button onClick={playPrevious}>
          <SkipBackIcon className="w-6 h-6" />
        </button>
        <button onClick={togglePlay}>
          {isPlaying ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </button>
        <button onClick={playNext}>
          <SkipForwardIcon className="w-6 h-6" />
        </button>
        <button onClick={toggleMute}>
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </button>
      </div>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={playNext}
        loop={isLoop}
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
        }}
        title={currentTrack.title}
      />
    </div>
  );
}
