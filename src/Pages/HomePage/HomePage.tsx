import { useEffect, useState } from 'react';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import './Homepage.css';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  /* const categories = [
    {
      name: 'games',
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="38" height="38" fill="url(#pattern0_2_201)" />
          <defs>
            <pattern
              id="pattern0_2_201"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_2_201" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_2_201"
              width="96"
              height="96"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVR4nO2V0QlDMQwDs/9yN1K7QCG06UPCuQP/y1LkrCUiIiIiIiIiIvIjwOtk1uX6xi9Iub7xC1Kub/yClOsbvyDl+sYvSLm+8QtSrm/8gpTre3yBpw2gXJ8BYAA24IT2ilOu75j2BSnXZwAYgA04ob3ilOs7pn1ByvUZAAZgA05orzjl+o5JL0j5GAAGEH+F2IC8EXiC8mYQGP8ADCD+CrEBeSPwBOXNIDD+ARhA/BViA/JG4AnKm0Fg/AMwgPgrxAbkjcATlDeDwPgHYADxV4gNyBuBJyhvBoHxD8AA4q8QG5A3gqknaEfaAKYbvCNtEAaQNwkbkDcKT9DMWe2kDcIA8iZhA/JGcesJ2pE2kOkG70gbjAHkTcYG5I3GE5Q3+9Os6aQNxgDyJmMD8kZz6wn6FjTUAK4GG2AAV4MNMICrwQYYwNVgAwzgarABBiAiIiIiIiIiIrL+wBtm8aDgET/r6gAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      )
    },
    {
      name: 'movies',
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="38" height="38" fill="url(#pattern0_2_200)" />
          <defs>
            <pattern
              id="pattern0_2_200"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_2_200" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_2_200"
              width="96"
              height="96"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO2Z0W1DMQwDvf9yN1K7QfNROBStO0D/FGnqAck5IiIiIiIiwwF+/pq0vufBAAxgNdgAA1gNNsAAVoMNMIDVYAMMYDXYgKzB/HMuy+8HAzCA1WADDGA12AADWA02wABWgw0wgNVgA75rCI/P+BfJ42MAGED8FWID8kbgCcqbQWD8BmAA8VeIDcgbgScobwaB8RuAAcRfITYgbwSeoLwZBMZvAAYQf4U0N8Cfq8kabAAYAANOiQ0gb7YniLzhfgOYNelv8Po/7U+a9AtkewM+kTaI1w3+RNpADCBvIjYgbySeoM457aQNxADyJmID8kbiCeqc007aQAwgbyI2IG8kr56gtEFsDyhtAAaQNwEbkDeC0Kw7QadMz3WmLcwwPdeZtjDD9Fxn2sIM03OdaQszTM91pi3MMD3XmbYww/RcZ9rCDNNznfYFKNdfvwDl+usXoFx//QKU669fgHL99QtQrr9+Acr11y9AuX4RERERETl1/AIbD6DgbhV7mwAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      )
    },
    {
      name: 'animals',
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="38" height="38" fill="url(#pattern0_2_223)" />
          <defs>
            <pattern
              id="pattern0_2_223"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_2_223" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_2_223"
              width="96"
              height="96"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2ZwXHDMBAD1X9zW1JSgqKRY4B3i5n7WosDQT58XUoppdQfBfw8mdMXS5vfOqBtfuuAtvmtA9rmtw5om986oG1+64C2+a0D2ub3KVAceJqf44Cn+TkOeJqf44Cn+TkOeJqf44Cn+TkOeJqf44Cn+fk0MMPGADCA+CnEBuQXgVdQfhkExjcAA4ifQmxAfhF4BeWXQWB8AzCA+CnEBuQXwalXUNoAw8cAMID4KcQG5BeBV1B+Gb4B7BsfYQwgfgqxAflF4BWUX4ZvAPvGR5jlAfj9GxkANoDFDYwDsPz7cQCWfz8OwPLvxwFY/v04AMu/73/CGMDP5LEBGED8FGID8ovAKyi/DN8A9o2PMAbw2RNzo/TCj2/A9VJpfgMgv3QbwEGNPg74Rml+AyC/dBvAQY0+DvhG0/zEDV2H8xkABmAD3qi94pTzvVa7Qcr5DAADsAFv1F5xyvleq90g5XwGgAHYgDdqrzjlfK8X/Onfo3y+vj8DwAAoOPk2gPzyvYIwAB/hh/IRxivo0YmgfL7egPoPfln1/uoBp/urB5zurx5wur96wOn+6gGn+6sHnO6vHvB6p//29wtI1Cd18W4sXQAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      )
    }
  ]; */

  const mockdata = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet',
      date: 'January 1, 2000',
      time: '10:11',
      originalPoster: 'John Doe',
      topic: 'games',
      replies: 3,
      lastReply: {
        name: 'Jane Doe',
        date: 'January 2, 2001',
        time: '10:27'
      }
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet',
      date: 'January 5, 2003',
      time: '10:22',
      originalPoster: 'Jane Doe',
      topic: 'animals',
      replies: 20,
      lastReply: {
        name: 'John Doe',
        date: 'January 5, 2022',
        time: '12:29'
      }
    }
  ];

  const postsContainerInfo = {
    title: 'All threads',
    svg: (
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        className="h-[1.5rem] mr-2 ml-2 fill-txtbright"
      >
        <style type="text/css"></style>
        <polygon
          points="38.2,1 36,1 21,1 21,6 31,6 31,11 27.4,11 26,11 26,16 22.9,16 21,16 21,21.1 18,21.1 16,21.1 16,26.1
13,26.1 10.9,26.1 10.9,31.1 7.6,31.1 5.9,31.1 5.9,36.1 0.9,36.1 0.9,41 10.9,41 10.9,38.5 10.9,36.1 16,36.1 16,33.6 16,31.1
21,31.1 21,29 21,26.1 26,26.1 26,22.6 26,21.1 31,21.1 31,17.6 31,16 36,16 36,26.1 41.1,26.1 41.1,16 41.1,11 41.1,1 "
        />
      </svg>
    ),
    posts: mockdata
  };

  const handlePostsFetch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/posts');
      console.log(response.data[0]);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePostsFetch();
  }, []);

  return (
    <div className="">
      {/* <nav className="flex justify-center">
        <ul className="flex gap-5">
          <li
            key={'all'}
            className="border flex items-center px-7 py-4 rounded-lg text-lg border-bordercol text-center hover:cursor-pointer hover:bg-bordercol hover:shadow-test bg-odark"
          >
            all
          </li>
          {categories.map((category) => {
            return (
              <li
                key={category.name}
                className="flex gap-2 items-center border px-7 py-2.5 rounded-lg text-xl border-bordercol text-center hover:cursor-pointer hover:bg-bordercol hover:shadow-test bg-odark"
              >
                {category.svg}
                {category.name}
              </li>
            );
          })}
        </ul>
      </nav> */}
      <PostsContainer
        title={postsContainerInfo.title}
        image={postsContainerInfo.svg}
        posts={posts}
      />
    </div>
  );
};

export default HomePage;
