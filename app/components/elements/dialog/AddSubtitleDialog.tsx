import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { toast } from 'sonner';

import { getExt } from '~/utils/file';
import usePlayerState from '~/store/player/usePlayerState';
import { useSoraSettings } from '~/hooks/useLocalStorage';
import { DialogHeader, DialogTitle } from '~/components/elements/Dialog';

interface IAddSubtitlesProps {
  artplayer: Artplayer | null;
  setCurrentSubtitle: React.Dispatch<React.SetStateAction<string>>;
}

const AddSubtitles = (props: IAddSubtitlesProps) => {
  const { artplayer, setCurrentSubtitle } = props;
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [subtitle, setSubtitle] = useState<File | null>(null);
  const { updateSubtitleSelector } = usePlayerState((state) => state);
  const { autoSwitchSubtitle } = useSoraSettings();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const type = getExt(file.name);
    if (!type || !['ass', 'vtt', 'srt'].includes(type)) {
      toast.error('Invalid file type', {
        description: 'Type support: .srt, .vtt, .ass',
        duration: 5000,
      });
      return;
    }
    setDisabledSubmit(false);
    setSubtitle(file);
  };

  const handleSubtitleSubmit = () => {
    if (subtitle) {
      setDisabledSubmit(true);
      const type = getExt(subtitle.name);
      const url = URL.createObjectURL(subtitle);
      const subtitleName =
        subtitle.name.length > 20
          ? `${subtitle.name.substring(0, 10)}...${subtitle.name.substring(
              subtitle.name.length - 10,
              subtitle.name.length,
            )}`
          : subtitle.name;
      const newSubtitle = [
        {
          html: subtitleName,
          url,
          type,
        },
      ];
      updateSubtitleSelector(newSubtitle);
      if (artplayer && autoSwitchSubtitle.value) {
        artplayer.subtitle.switch(url, {
          name: subtitleName,
          type,
        });
        setCurrentSubtitle(subtitleName);
        toast.success('Subtitle added successfully', {
          description: 'The subtitle has been switched automatically',
          duration: 3000,
        });
      } else {
        toast.success('Subtitle added successfully', {
          description: 'You can choose the subtitle in the subtitles list',
          duration: 3000,
        });
      }
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="!mb-3">Add Subtitle</DialogTitle>
      </DialogHeader>
      <div className="w-full">
        <div className="!mb-5 flex flex-col items-end justify-start gap-4 sm:flex-row sm:items-center">
          <input
            type="file"
            id="subtitle"
            name="subtitle"
            accept=".srt,.vtt,.ass"
            onChange={(e) => handleFileChange(e)}
            className="flex h-10 w-full rounded-md border border-border bg-transparent !px-3 !py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-alpha focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
          <Button
            type="submit"
            auto
            disabled={disabledSubmit}
            onPress={() => handleSubtitleSubmit()}
            className="!px-4"
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddSubtitles;
