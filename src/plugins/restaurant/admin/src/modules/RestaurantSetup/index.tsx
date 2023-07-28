import { Typography } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

// import RestaurantDetail from './RestaurantDetails';
import { useRestaurantSetup } from "./constant";

const { Text } = Typography;

interface RestaurantSetupProps {
  isCreate?: boolean;
  step?: number;
}

const RestaurantSetup = ({ isCreate, step }: RestaurantSetupProps) => {
  const router = useRouter();
  const RESTAURANT_SETUP = useRestaurantSetup();
  const [currentRestaurantId, setCurrentRestaurantId] = useState<number>(
    +(router.query?.id || 0)
  );
  const [clickedStep, setClickedStep] = useState<number>(
    step || RESTAURANT_SETUP[0].id
  );
  const onPreviousClick = () => setClickedStep((prevStep) => prevStep - 1);
  const onNextClick = () => {
    setClickedStep((prevStep) => {
      if (prevStep + 1 <= RESTAURANT_SETUP[RESTAURANT_SETUP.length - 1].id) {
        return prevStep + 1;
      }

      return RESTAURANT_SETUP[0].id;
    });
  };
  const onStepClick = (id: number) => {
    if (id !== clickedStep && !isCreate) {
      setClickedStep(id);
    }
  };
  const updateRestaurantId = (id: number) => {
    setCurrentRestaurantId(id);
  };

  return (
    <div className="grid grid-cols-1 rounded-2xl border md:grid-cols-3">
      <div className="flex flex-col gap-4 border-b p-6 md:gap-8 md:border-b-0 md:border-r">
        {RESTAURANT_SETUP.map(({ description, id, title }) => (
          <div
            key={id}
            className="flex flex-row gap-4"
            onClick={() => onStepClick(id)}
            onKeyDown={() => {
              onStepClick(id);
            }}
            role="button"
            tabIndex={0}
          >
            <div
              className={twMerge(
                "flex h-8 place-content-center place-items-center rounded-lg p-3 md:h-12 md:w-12 bg-[#f3f2f7]",
                clickedStep === id && "bg-[#004e5a]"
              )}
            >
              <Text
                className={twMerge(
                  "text-base",
                  clickedStep === id && "text-white"
                )}
              >
                {id}
              </Text>
            </div>
            <div className="flex flex-col">
              <Text className="text-xl font-medium">{title}</Text>
              <Text>{description}</Text>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-2 flex flex-col p-6">
        {clickedStep === 1 && (
          <Text>Hello</Text>
          // <RestaurantDetail
          //   isCreate={isCreate}
          //   onNextClick={onNextClick}
          //   updateRestaurantId={updateRestaurantId}
          // />
        )}
        {/* {clickedStep === 2 && (
          <EmployeeNumber
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            restaurantData={data}
            restaurantId={currentRestaurantId || 0}
          />
        )}

        {clickedStep === 3 && (
          <KeyPersonnel
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            restaurantData={data}
            restaurantId={currentRestaurantId || 0}
          />
        )}
        {clickedStep === 4 && (
          <OperatingHours
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            restaurantData={data}
            restaurantId={currentRestaurantId || 0}
          />
        )}
        {clickedStep === 5 && (
          <SupportingImages
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            restaurantData={data}
            restaurantId={currentRestaurantId || 0}
          />
        )}
        {clickedStep === 6 && (
          <SupportingDocument
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            restaurantId={currentRestaurantId || 0}
          />
        )}
        {clickedStep === 7 && (
          <Cleanliness
            onPreviousClick={onPreviousClick}
            restaurantId={currentRestaurantId || 0}
          />
        )} */}
      </div>
    </div>
  );
};

export default RestaurantSetup;
