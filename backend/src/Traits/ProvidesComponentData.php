<?php

declare(strict_types=1);

namespace Jordyvandomselaar\Larapine\Traits;

trait ProvidesComponentData
{
    abstract public function getComponentData(): array;

    public function componentData(): string
    {
        return sprintf('data-component-data=\'%s\'', json_encode($this->getComponentData(), JSON_THROW_ON_ERROR));
    }
}
