import { purple, slate, violet } from '@radix-ui/colors';
import * as Dialog from '@radix-ui/react-dialog';
import { createStitches } from '@stitches/core';
import React from 'react';

const { css } = createStitches({
  theme: {
    colors: {
      ...purple,
      ...violet,
      ...slate,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '30px',
      6: '40px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    radii: {
      rounded: '9999px',
    },
  },
  utils: {
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
});

const body = css({ padding: 40 });

const button = css({
  px: '$2',
  border: 'none',
  appearance: 'none',
  borderRadius: '$rounded',

  variants: {
    sizes: {
      _small: {
        height: '$6',
        fontSize: 13,
      },
      _medium: {
        height: 40,
        fontSize: 16,
      },
    },
    variant: {
      _purple: {
        color: 'white',
        backgroundColor: '$purple10',
        borderRadius: '$rounded',
        '&:hover': {
          backgroundColor: '$violet2',
        },
      },
      _gray: {
        color: 'white',
        backgroundColor: 'Gainsboro',
        '&:hover': {
          backgroundColor: 'DarkSlateGray',
        },
      },
    },
    outlined: {
      true: {
        backgroundColor: '$violet4',
        border: '1px solid',
        '&:hover': {
          backgroundColor: '$violet11',
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: '_gray',
      outlined: true,
      css: {
        borderColor: 'LightGray',
      },
    },
    {
      variant: '_purple',
      outlined: true,
      css: {
        fontSize: '$3',
        color: '$violet8',
        fontWeight: 'lighter',
        borderColor: 'transparent',

        '&:hover': {
          border: 'transparent',
          color: 'white',
        },
      },
    },
  ],

  defaultVariants: {
    variant: '_purple',
    sizes: '_medium',
  },
});

const overlay = css({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgb(0, 0, 0, 0.2)',
});

const dialogContent = css({
  backgroundColor: 'white',
  padding: '$4',
  width: 500,
  top: '50',
  left: '50',
  display: 'flex',
  flexDirection: 'column',
  transition: '2s',
  gap: '20px',
  borderRadius: '6px',
  transform: 'translate(50%, 50%)',
});

const box = css({});

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(true);

  return (
    <div className={body()}>
      <Dialog.Root>
        <Dialog.Trigger className={button({ outlined: true, variant: '_purple' })}>
          open profile
        </Dialog.Trigger>
        <Dialog.Overlay className={overlay()} />
        <Dialog.Content className={dialogContent()}>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Here you can make changes to your profile.{' '}
          </Dialog.Description>
          <div>
            <label>Name</label>
            <input placeholder='Your name..' />
          </div>
          <button className={button({ outlined: true })}>Save changes</button>
          <Dialog.Close
            onClick={() => setIsDialogOpen(false)}
            className={button({ variant: '_gray' })}
          >
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
